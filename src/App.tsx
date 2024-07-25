import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CarGrid from "./components/CarGrid";
import FilterList from "./components/FilterList";
import { useState } from "react";
import { FilterCriteria } from "./components/FilterCard";

//<GridItem area="footer">
//  <Footer></Footer>
//</GridItem>
//lg: `"nav nav" "aside main" "footer footer"`

function App() {

  const [selectedFilters, setSelectedFilters] = useState<FilterCriteria[] | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <FilterList onChange={(filtersList) => setSelectedFilters(filtersList)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <CarGrid selectedFilters={selectedFilters}></CarGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
