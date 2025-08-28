'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


   const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
     router.push('/Herofile');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
    //   style={{
    //     background
    //   }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center mt-6">
    <button
    type="Login" 
    className="w-1/2 bg-sky-600 text-white py-2 px-4 rounded text-center hover:bg-sky-700 transition duration-300"
  >
    Login
  </button>
</div>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Do not have an account?{' '}
          <a href="/signup" className="text-sky-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
