import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
    >
      <GridItem area="nav" bg="dogderblue">
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="coral">
          SideBar
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
        Main Area
      </GridItem>
    </Grid>
  );
}

export default App;
