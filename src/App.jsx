import { useState } from "react";
import { StateContext } from "./Context/StateContext";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  const states = {};
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StateContext.Provider value={states}>
          <Layout />
        </StateContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
