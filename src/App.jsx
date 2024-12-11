import { useContext, useEffect, useState } from "react";
import { StateContext } from "./Context/StateContext";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createUser } from "./components/Firebase/Firebase";
import { auth } from "./components/Firebase/firebase.init";
import { onAuthStateChanged } from "firebase/auth";
const queryClient = new QueryClient();
function App() {
  const [user, setUser] = useState(null);

  const states = {
    createUser,
    user,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  });
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
