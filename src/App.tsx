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
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const showSideBar = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* Using breakpointValue */}
      {showSideBar && (
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      )}

      <GridItem area="main">
        <GameGrid />
      </GridItem>
      <GridItem area="footer" bg={"yellow"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
