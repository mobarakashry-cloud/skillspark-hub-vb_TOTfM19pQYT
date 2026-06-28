"use client"
import React from 'react';
import { Product } from '@/types/product';
import HomeProductCard from './HomeProductCard';

interface Props {
  products: Product[];
  onView?: (p: Product) => void;
}

export const ProductGrid: React.FC<Props> = ({ products, onView }) => {
  if (!products || products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-center text-slate-500">No products found.</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(p => (
          <div 
            key={p.id} 
            onClick={() => onView && onView(p)} 
            className="cursor-pointer"
          >
            <HomeProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
