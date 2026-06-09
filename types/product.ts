export type Rating = {
  average: number
  count: number
}

export type ProductVariant = {
  id: string
  title?: string
  price?: number
  inventory?: number
}

export interface Product {
  id: string
  slug: string
  title: string
  description?: string
  price: number // stored in minor units (cents)
  currency: string
  images?: string[]
  inventory?: number
  variants?: ProductVariant[]
  rating?: Rating
}

export default Product
