'use client';

import { use, useEffect, useState } from 'react';
import products from '@/data/product';
import Link from 'next/link';

export default function SearchPage({ params }) {
  const { term } = use(params);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!term) {
      setFilteredProducts([]);
      return;
    }

    const search = decodeURIComponent(term).toLowerCase();
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
    setFilteredProducts(results);
  }, [term]);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for:{' '}
        <span className="text-blue-600">{decodeURIComponent(term)}</span>
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="border p-4 rounded hover:shadow-md transition">
                <img
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded"
                />
                <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
                <p className="text-sm text-black-600">{product.description}</p>
                <p className="mt-1 font-bold text-green-700">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
