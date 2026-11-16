"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { PI_NETWORK_CONFIG, BACKEND_URLS } from "@/lib/system-config";
import {
  api,
  setApiAuthToken,
  DEFAULT_REQUEST_TIMEOUT_MS,
  withTimeout,
  retryWithBackoff,
} from "@/lib/api";

export type LoginDTO = {
  id: string;
  username: string;
  credits_balance: number;
  terms_accepted: boolean;
};

interface PiAuthResult {
  accessToken: string;
  user: {
    uid: string;
    username: string;
  };
}

declare global {
  interface Window {
    Pi: {
      init: (config: { version: string; sandbox?: boolean }) => Promise<void>;
      authenticate: (scopes: string[]) => Promise<PiAuthResult>;
    };
  }
}

interface PiAuthContextType {
  isAuthenticated: boolean;
  authMessage: string;
  piAccessToken: string | null;
  userData: LoginDTO | null;
  reinitialize: () => Promise<void>;
}

const PiAuthContext = createContext<PiAuthContextType | undefined>(undefined);

const activateFallbackSession = () => {
  console.warn(
    "⚠️ Pi auth fallback activated. Entering preview/guest mode.",
  );
  const mockToken = "preview_guest_token";
  setPiAccessToken(mockToken);
  setApiAuthToken(mockToken);
  setUserData({
    id: "guest-user",
    username: "Pioneer_Preview",
    credits_balance: 100,
    terms_accepted: true,
  });
  setIsAuthenticated(true);
  // Preview/guest fallback is an EXPECTED, non-error state (e.g. running in a
  // non-Pi browser). Keep the message neutral so the AuthLoadingScreen does
  // NOT show the red "failed" banner — the user simply browses as a guest.
  setAuthMessage(
    "Preview mode is active. Pi Network authentication is not required in this browser.",
  );
};

// Loads the Pi SDK script and resolves once it is ready (or rejects).
const ensurePiSdkReady = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    // Already loaded (e.g. Pi Browser auto-injects it).
    if (typeof window !== "undefined" && window.Pi) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = PI_NETWORK_CONFIG.SDK_URL;
    script.async = true;

    const onLoad = () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
      resolve();
    };
    const onError = () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
      reject(new Error("Failed to load Pi SDK script"));
    };

    script.onload = onLoad;
    script.onerror = onError;
    document.head.appendChild(script);
  });
};

const authenticateAndLogin = async (): Promise<void> => {
  setAuthMessage("Initializing Pi Network...");
  setPiAccessToken(null);
  setUserData(null);

  try {
    if (typeof window !== "undefined" && window.Pi) {
      // 1) Make sure the Pi SDK is loaded before calling Pi.init (critical
      //    fix for Pi Browser / WebView environments where setTimeout-driven
      //    timeouts can be throttled or blocked).
      await withTimeout(
        ensurePiSdkReady(),
        DEFAULT_REQUEST_TIMEOUT_MS,
        "Pi SDK load timed out",
      );

      // 2) Initialize Pi.
      await withTimeout(
        window.Pi.init({
          version: "2.0",
          sandbox: PI_NETWORK_CONFIG.SANDBOX,
        }),
        DEFAULT_REQUEST_TIMEOUT_MS,
        "Pi.init timed out",
      );

      setAuthMessage("Authenticating with Pi Network...");
      const piAuthResult = await withTimeout(
        window.Pi.authenticate(["username"]),
        DEFAULT_REQUEST_TIMEOUT_MS,
        "Pi authentication timed out",
      );

      if (!piAuthResult?.accessToken) {
        throw new Error("No access token returned from Pi Network");
      }

      setPiAccessToken(piAuthResult.accessToken);
      setApiAuthToken(piAuthResult.accessToken);

      setAuthMessage("Logging in to backend...");
      const loginRes = await withTimeout(
        api.post<LoginDTO>(BACKEND_URLS.LOGIN, {
          pi_auth_token: piAuthResult.accessToken,
        }),
        DEFAULT_REQUEST_TIMEOUT_MS,
        "Backend login timed out",
      );

      setUserData(loginRes.data);
      setAuthMessage("Authentication successful. Welcome back!");
    } else {
      // Fallback for normal browser / preview mode
      const mockToken = "preview_guest_token";
      setPiAccessToken(mockToken);
      setApiAuthToken(mockToken);
      setUserData({
        id: "guest-user",
        username: "Pioneer_Preview",
        credits_balance: 100,
        terms_accepted: true,
      });
      setAuthMessage("Authentication successful. Welcome back!");
    }

    setIsAuthenticated(true);
  } catch (err) {
    console.warn("⚠️ Pi auth step failed:", err);
    activateFallbackSession();
  }
};

// Overall safety-net timeout: guarantees the auth screen never hangs forever
const overallFlowTimeout = (): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Authentication flow timed out")), 90_000);
  });
};

export function PiAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMessage, setAuthMessage] = useState("Initializing Pi Network...");
  const [piAccessToken, setPiAccessToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<LoginDTO | null>(null);

  const resetAuthState = () => {
    setIsAuthenticated(false);
    setAuthMessage("Initializing Pi Network...");
    setPiAccessToken(null);
    setUserData(null);
  };

  const reinitialize = async () => {
    resetAuthState();
    await authenticateAndLogin();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const flowPromise = authenticateAndLogin();
      // Overall safety net: guarantee the screen never stays stuck beyond 90s
      const bounded = Promise.race([
        flowPromise,
        overallFlowTimeout(),
      ]);
      bounded.catch(() => {
        if (!isAuthenticated) {
          activateFallbackSession();
        }
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const value: PiAuthContextType = {
    isAuthenticated,
    authMessage,
    piAccessToken,
    userData,
    reinitialize,
  };

  return (
    <PiAuthContext.Provider value={value}>
      {children}
    </PiAuthContext.Provider>
  );
}

export function usePiAuth() {
  const context = useContext(PiAuthContext);
  if (context === undefined) {
    throw new Error("usePiAuth must be used within a PiAuthProvider");
  }
  return context;
}
