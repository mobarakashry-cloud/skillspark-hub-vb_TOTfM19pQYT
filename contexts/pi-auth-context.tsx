"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { PI_NETWORK_CONFIG, BACKEND_URLS } from "@/lib/system-config";
import { api, setApiAuthToken } from "@/lib/api";

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

export function PiAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMessage, setAuthMessage] = useState("Initializing Pi Network...");
  const [piAccessToken, setPiAccessToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<LoginDTO | null>(null);

  const authenticateAndLogin = async () => {
    try {
      setAuthMessage("Initializing Pi Network...");
      if (typeof window !== "undefined" && window.Pi) {
        await window.Pi.init({
          version: "2.0",
          sandbox: PI_NETWORK_CONFIG.SANDBOX,
        });

        setAuthMessage("Authenticating with Pi Network...");
        const piAuthResult = await window.Pi.authenticate(["username"]);
        
        if (piAuthResult?.accessToken) {
          setPiAccessToken(piAuthResult.accessToken);
          setApiAuthToken(piAuthResult.accessToken);
          
          setAuthMessage("Logging in to backend...");
          try {
            const loginRes = await api.post<LoginDTO>(BACKEND_URLS.LOGIN, {
              pi_auth_token: piAuthResult.accessToken,
            });
            setUserData(loginRes.data);
          } catch (e) {
            // Fallback user data if backend login fails in preview
            setUserData({
              id: "pi-user",
              username: piAuthResult.user?.username || "Pioneer",
              credits_balance: 100,
              terms_accepted: true,
            });
          }
        }
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
      }
      setIsAuthenticated(true);
    } catch (err) {
      console.warn("⚠️ Pi Auth fallback activated:", err);
      // Fallback to allow app browsing even if Pi SDK auth fails/times out
      setPiAccessToken("preview_guest_token");
      setUserData({
        id: "guest-user",
        username: "Pioneer_Preview",
        credits_balance: 100,
        terms_accepted: true,
      });
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      authenticateAndLogin();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const value: PiAuthContextType = {
    isAuthenticated,
    authMessage,
    piAccessToken,
    userData,
    reinitialize: authenticateAndLogin,
  };

  return (
    <PiAuthContext.Provider value={value}>{children}</PiAuthContext.Provider>
  );
}

export function usePiAuth() {
  const context = useContext(PiAuthContext);
  if (context === undefined) {
    throw new Error("usePiAuth must be used within a PiAuthProvider");
  }
  return context;
}
