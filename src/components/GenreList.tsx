import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getOptimizedImageUrl from "../services/image-url";

interface GenreListProps {
  onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: GenreListProps) => {
  const { data, loading, error } = useGenre();
  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <List.Root listStyle={"none"}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getOptimizedImageUrl(genre.image_background)}
            />
            <Button
              fontSize={"lg"}
              variant={"ghost"}
              onClick={() => {
                onSelectedGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
