import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter } from "./AppRouter";

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<div>loading</div>}>
        <RouterProvider router={appRouter} />;
      </React.Suspense>
    </QueryClientProvider>
  );
}

export default App;
