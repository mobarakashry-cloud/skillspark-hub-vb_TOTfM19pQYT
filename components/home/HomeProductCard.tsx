"use client"
import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface Props {
  product: Product;
  onView?: (p: Product) => void;
}

export const HomeProductCard: React.FC<Props> = ({ product, onView }) => {
  const price = new Intl.NumberFormat(undefined, { style: 'currency', currency: product.currency }).format(
    product.price / 100
  );

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition overflow-hidden border border-transparent hover:border-gray-100 animate-enter">
      <div className="relative w-full h-56 sm:h-64">
        {product.images?.[0] ? (
          <Image src={product.images[0]} alt={product.title} fill style={{ objectFit: 'cover' }} />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-sm sm:text-base font-semibold text-slate-900 truncate">{product.title}</h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm sm:text-base font-bold text-indigo-600">{price}</div>
          <button
            onClick={() => onView?.(product)}
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
            aria-label={`View ${product.title}`}
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
};

export default HomeProductCard;
