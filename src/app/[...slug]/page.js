
import { Suspense } from 'react';
import MyClientComponent from './Myclientcomponet'; 

export default function CatchAllPage() {
  return (
    <div>
      <h1>Dynamic Content Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyClientComponent />
      </Suspense>
    </div>
  );
}