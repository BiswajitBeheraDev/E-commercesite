"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function MyClientComponentInner() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get("error");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      {errorCode && <p>Error Code: {errorCode}</p>}
    </div>
  );
}

export default function MyClientComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyClientComponentInner />
    </Suspense>
  );
}
