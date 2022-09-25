import React, { Suspense } from "react";
import SuspenseAfterInitialRender from "./lib/index";

export default function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      hey there
      <SuspenseAfterInitialRender fallback={<>Loading</>}>
        <>hello world</>
      </SuspenseAfterInitialRender>
    </Suspense>
  );
}
