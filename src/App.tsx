import { useState } from "react";
import "./App.css";
import {
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Button } from "./components/ui/button";

function App() {
  const showSideBar = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" bg={"red"}>
        NavBar
      </GridItem>

      {/* Using breakpointValue */}
      {showSideBar && (
        <GridItem area="aside" bg={"blue"}>
          Side Bar
        </GridItem>
      )}

      <GridItem area="main" bg={"green"}>
        Main Content
      </GridItem>
      <GridItem area="footer" bg={"yellow"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
