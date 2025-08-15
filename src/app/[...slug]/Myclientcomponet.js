'use client';

import { useSearchParams } from 'next/navigation';

export default function MyClientComponent() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get('error');

  return (
    <div className="mt-4 p-4 border rounded-md bg-red-50 text-red-700">
      <p>Error Code from URL: <strong>{errorCode || 'None'}</strong></p>
      <p className="text-sm mt-2">
        This is a client component that can safely use <code>useSearchParams()</code>.
      </p>
    </div>
  );
}