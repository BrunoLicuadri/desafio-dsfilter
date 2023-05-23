import Filter from "./components/Filter";
import Header from "./components/Header";
import Listing from "./components/Listing";

function App() {

  return (
    <>
      <Header title="DSFilter" />
      <Filter btnText="Filtrar" />
      <Listing />
    </>

  )
}

export default App
