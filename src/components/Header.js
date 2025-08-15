'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import products from '@/data/product'; 
import { useCart } from '@/context/cartcontext';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [storeOpen, setStoreOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
   const { cart } = useCart();

  const categories = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Food-Drink', value: 'food-drink' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Home-Office', value: 'home-office' },
    { label: 'Kitchen-Dining', value: 'kitchen-dining' },
    { label: 'Home-Decor', value: 'home-decor' },
    { label: 'Sports-Fitness', value: 'sports-fitness' },
    { label: 'Toys-Games', value: 'toys-games' },
    { label: 'Apparel', value: 'apparel' },
    { label: 'Hobbies-Music', value: 'hobbies-music' },
    { label: 'Art-Hobbies', value: 'art-hobbies' },
    { label: 'Outdoor-Sports', value: 'outdoor-sports' },
    { label: 'Books', value: 'books' },
  ];

  useEffect(() => {
    if (pathname === '/search') {
      const query = searchParams.get('q') || '';
      setSearchTerm(query);
    }
  }, [pathname, searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    const currentQuery = searchParams.get('q') || '';

    if (trimmed && trimmed !== currentQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }

    setSuggestions([]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim().length > 0 && pathname !== '/search') {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
    router.push(`/search?q=${encodeURIComponent(name)}`);
  };

  return (
    <header className="bg-sky-600 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Logo" width={40} height={40} />
          <span className="text-white text-xl font-bold">MyShop</span>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex-1 mx-6 hidden md:flex flex-col relative"
        >
          <div className="flex w-2/3 bg-white rounded-full overflow-hidden border border-gray-200">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleChange}
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 px-5 py-2 text-white font-semibold rounded-full hover:bg-yellow-500"
            >
              Search
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-14 w-2/3 bg-white border border-gray-300 rounded-md shadow-md z-50">
              {suggestions.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => handleSuggestionClick(product.name)}
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 relative">
          <Link href="/" className="text-white hover:text-gray-200 transition">
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setStoreOpen(!storeOpen)}
              className="text-white hover:text-gray-200 transition"
            >
              Store ▾
            </button>

            {storeOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-50">
                {categories.map((cat) => (
                  <Link
                    key={cat.value}
                    href={`/Catagory/${cat.value}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setStoreOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative text-white hover:text-gray-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.3 1.3a1 1 0 000 1.4L7 17h10l1.3-1.3a1 1 0 000-1.4L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
          )}
          </Link>
        </div>
      </div>
    </header>
  );
}
