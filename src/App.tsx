import "./App.css";
import { Box, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  //useBreakpointValue
  const showSideBar = useBreakpointValue({ base: false, lg: true });
  useEffect(() => {
    console.log("======================");
    console.log("selectedGenre", selectedGenre);
    console.log("======================");
  }, [selectedGenre]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" position="sticky" top={0} zIndex={1} bg="black">
        <NavBar />
      </GridItem>

      {/* Using breakpointValue */}
      {showSideBar && (
        <GridItem
          area="aside"
          paddingX={5}
          position={"sticky"}
          top={0}
          height="85vh"
          overflow="auto"
          css={{
            /* Hide ScrollBar */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <GenreList
            onSelectedGenre={(genre: Genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      )}

      <GridItem area="main" paddingY={5}>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area="footer" bg={"yellow"} w="full">
        <Box w="full" textAlign="center" p={4}>
          Footer
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
