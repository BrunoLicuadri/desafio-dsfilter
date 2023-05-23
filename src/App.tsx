import Filter from "./components/ListingBody/Filter";
import Header from "./components/Header";
import Listing from "./components/ListingBody/Listing";

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
