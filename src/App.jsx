import { useState } from "react";
import { StateContext } from "./Context/StateContext";
import Layout from "./Layout";

function App() {
  const states = {};
  return (
    <>
      <StateContext.Provider value={states}>
        <Layout />
      </StateContext.Provider>
    </>
  );
}

export default App;
