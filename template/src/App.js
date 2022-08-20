import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "src/components/ui";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center h-full items-center">
            <Loading />
          </div>
        }
      >
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
