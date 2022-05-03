import { Suspense } from "react";

function Thing() {
  if (typeof window === "undefined") {
    const e = new Error();
    e.name = "Rendering Suspense fallback...";
    delete e.stack;
    throw e;
  }
  return "Thing";
}

export default function IndexPage() {
  return (
    <div>
      <p>Next.js Example</p>
      <Suspense fallback="Loading...">
        <Thing />
      </Suspense>
    </div>
  );
}
