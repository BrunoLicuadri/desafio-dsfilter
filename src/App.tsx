import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextItemCount } from "./utils/context-products";

function App() {

  const [contextItemCount, setContextItemCount] = useState<number>(0);

  return (
      <ContextItemCount.Provider value={{ contextItemCount, setContextItemCount }}>
        <Header title="DSFilter" />
        <ListingBody />
      </ContextItemCount.Provider>
  )
}

export default App
