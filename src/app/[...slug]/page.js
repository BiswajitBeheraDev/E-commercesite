"use client";

import { Suspense } from "react";
import NotFoundContent from "./Myclientcomponet";

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
