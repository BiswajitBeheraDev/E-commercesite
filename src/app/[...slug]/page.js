import { Suspense } from "react";
import NotFoundContent from "./Myclientcomponent";

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
