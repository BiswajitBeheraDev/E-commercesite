// 'use client'; 

// import { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function NotFoundPage() {
//   const searchParams = useSearchParams();
//   const errorCode = searchParams.get("error");

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>404 - Page Not Found</h1>
//         {errorCode && <p>Error Code: {errorCode}</p>}
//       </div>
//     </Suspense>
//   );
// }