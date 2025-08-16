import { Suspense } from "react";
import MyClientComponent from "./MyClientComponent";

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyClientComponent />
    </Suspense>
  );
}
