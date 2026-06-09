export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  price: number; // minor units (e.g., cents)
  metadata?: Record<string, any>;
}

export interface CartState {
  items: CartItem[];
}

export interface AddItemPayload {
  productId: string;
  variantId?: string;
  quantity?: number;
}

export default CartState;
