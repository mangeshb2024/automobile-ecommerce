import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CarGrid from "./components/CarGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main" "footer footer"`
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          SideBar
        </GridItem>
      </Show>
      <GridItem area="main">
        <CarGrid></CarGrid>
      </GridItem>
      <GridItem area="footer">
        <Footer></Footer>
      </GridItem>
    </Grid>
  );
}

export default App;
