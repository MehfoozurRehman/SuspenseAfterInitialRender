import React, { Suspense } from "react";
import SuspenseAfterInitialRender from "./lib/index";

export default function App() {
  return (
    <Suspense>
      hey there
      <SuspenseAfterInitialRender fallback={<>Loading</>}>
        <>hello world</>
      </SuspenseAfterInitialRender>
    </Suspense>
  );
}
