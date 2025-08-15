"use client";

import products from '../data/product';
import ProductCard from '@/components/productcard';
import Slider from '@/components/slider';

export default function Home() {
  return (
    <>
      <Slider/>
      <section className="max-w-7xl mx-auto px-4 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
