import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { IoIosArrowDown } from "react-icons/io";

interface PlatformSelectorProps {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild width={"20%"}>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : "Select Platform"}
          <IoIosArrowDown fontWeight={"bold"} fontSize={"20px"} />
        </Button>
      </MenuTrigger>
      <MenuContent
        width={"20%"}
        overflow={"auto"}
        position={"absolute"}
        zIndex={10}
      >
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform as Platform)}
            value={platform.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
