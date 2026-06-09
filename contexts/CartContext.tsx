"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { CartItem, CartState } from "@/types/cart"

const STORAGE_KEY = "anas_cart_v1"

type CartContextType = {
  state: CartState
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const defaultState: CartState = { items: [] }

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CartState>(defaultState)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setState(JSON.parse(raw))
    } catch (e) {
      console.warn("Failed to read cart from localStorage", e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      console.warn("Failed to write cart to localStorage", e)
    }
  }, [state])

  const addItem = (item: CartItem) => {
    setState((prev) => {
      const idx = prev.items.findIndex((i) => i.id === item.id)
      if (idx > -1) {
        const items = [...prev.items]
        items[idx] = { ...items[idx], quantity: items[idx].quantity + item.quantity }
        return { items }
      }
      return { items: [...prev.items, item] }
    })
  }

  const removeItem = (id: string) => setState((prev) => ({ items: prev.items.filter((i) => i.id !== id) }))

  const updateQuantity = (id: string, quantity: number) =>
    setState((prev) => ({ items: prev.items.map((i) => (i.id === id ? { ...i, quantity } : i)) }))

  const clearCart = () => setState(defaultState)

  const total = useMemo(() => state.items.reduce((s, i) => s + i.price * i.quantity, 0), [state])

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

export default CartContext
