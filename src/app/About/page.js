'use client';

import React from 'react';
import { SmallSlider } from '@/components/smallslider';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white p-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        
        <div className="w-full md:w-[320px]">
          <SmallSlider />
        </div>

        <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-sky-600">About Our Products</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At [My Shop], our products are crafted with care, purpose, and attention to detail.
            We collaborate with trusted creators and brands to bring you high-quality items that blend thoughtful design with long-lasting performance.
            <br /><br />
            <strong>Why choose us?</strong><br />
            ✅ Premium materials<br />
            ✅ Unique designs<br />
            ✅ Made to last
          </p>
        </div>
      </div>
    </div>
  );
}
