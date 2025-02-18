import { HStack, Text } from "@chakra-ui/react";
import { CgMoreO } from "react-icons/cg";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <hr />

      <Text textAlign={"center"} paddingY={5}>
        <HStack textAlign={"center"} justifyContent={"center"} gap={2}>
          <FaFacebook />
          <FaInstagramSquare />
          <FaSquareXTwitter />
          <CgMoreO />
        </HStack>
        ©2025 Vortex GameStore. All Rights Reserved.
      </Text>
    </>
  );
};

export default Footer;
