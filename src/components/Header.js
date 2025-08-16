"use client";

import { Suspense } from "react";
import HeaderContent from "./HeaderContent";

export default function Header() {
  return (
    <Suspense fallback={<div className="bg-sky-600 p-3 text-white">Loading header...</div>}>
      <HeaderContent />
    </Suspense>
  );
}
