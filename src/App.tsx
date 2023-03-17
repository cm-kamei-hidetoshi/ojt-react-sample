import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { appRouter } from "./AppRouter";

function App() {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <RouterProvider router={appRouter} />;
    </React.Suspense>
  );
}

export default App;
