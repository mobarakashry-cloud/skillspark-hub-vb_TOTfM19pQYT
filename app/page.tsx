import React from 'react'
import Hero from '@/components/home/Hero'
import ProductGrid from '@/components/home/ProductGrid'
import type { Product } from '@/types/product'

const demoProducts: Product[] = [
  {
    id: 'demo-1',
    slug: 'leather-wallet',
    title: 'Heritage Leather Wallet',
    description: 'Premium full-grain leather wallet with RFID protection.',
    price: 4999,
    currency: 'USD',
    images: ['/placeholders/wallet.svg'],
    inventory: 24,
  },
  {
    id: 'demo-2',
    slug: 'classic-watch',
    title: 'Classic Chronograph Watch',
    description: 'Timeless chronograph with sapphire crystal and leather strap.',
    price: 12999,
    currency: 'USD',
    images: ['/placeholders/watch.svg'],
    inventory: 8,
  },
  {
    id: 'demo-3',
    slug: 'noise-cancelling-headphones',
    title: 'Studio Noise-Cancelling Headphones',
    description: 'Immersive sound with active noise cancellation and long battery life.',
    price: 8999,
    currency: 'USD',
    images: ['/placeholders/headphones.svg'],
    inventory: 12,
  },
  {
    id: 'demo-4',
    slug: 'artisan-scent',
    title: 'Artisan Home Scent',
    description: 'Hand-blended fragrances for a refined home atmosphere.',
    price: 3499,
    currency: 'USD',
    images: ['/placeholders/scent.svg'],
    inventory: 40,
  },
]

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductGrid products={demoProducts} />
    </main>
  )
}
