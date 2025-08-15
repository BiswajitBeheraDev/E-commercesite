"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundContent() {
  const searchParams = useSearchParams();
  const errorCode = searchParams.get("error");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      {errorCode && <p>Error code: {errorCode}</p>}
    </div>
  );
}
