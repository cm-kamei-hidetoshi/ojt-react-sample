import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { appRouter } from "./AppRouter";
import { AppRouter } from "./AppRouter2";

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <React.Suspense fallback={<div>Global loading</div>}>
          {/* <RouterProvider router={appRouter} />; */}
          <AppRouter />
        </React.Suspense>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
