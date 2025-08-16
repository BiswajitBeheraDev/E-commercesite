"use client";

import { useSearchParams } from "next/navigation";

export default function MyClientComponent() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get("error");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      {errorCode && <p>Error Code: {errorCode}</p>}
    </div>
  );
}
