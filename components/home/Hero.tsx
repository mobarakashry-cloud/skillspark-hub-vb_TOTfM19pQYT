import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = 'Discover exceptional products',
  subtitle = 'Curated goods, premium experience — discover items tailored to your lifestyle.',
  ctaText = 'Shop Now',
  ctaHref = '/shop',
}) => {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl">{subtitle}</p>
            <div className="flex items-center gap-4">
              <a
                href={ctaHref}
                className="inline-flex items-center px-7 py-3 bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg transform hover:-translate-y-0.5 transition"
              >
                {ctaText}
              </a>
              <a href="/about" className="text-slate-200 hover:text-white transition font-medium">
                Learn more
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-300">Free shipping over $50 • 30-day returns</div>
          </div>

          <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <Image
              src="/placeholders/hero.svg"
              alt="Featured collection showcasing curated products"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
