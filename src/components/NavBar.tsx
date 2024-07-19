import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/CarLogo.jpg";

const NavBar = () => {
  return (
    <HStack justify="space-between" paddingRight={10} bg="#a2a8af">
      <a href="./index.html">
        <Image src={logo} boxSize="150px" />
      </a>
      <a href="https://www.autocarindia.com/car-news">
        <Heading fontSize={20}>What's New?</Heading>
      </a>
      <a href="./index.html">
        <Heading fontSize={20}>About</Heading>
      </a>
      <a href="./index.html">
        <Heading fontSize={20}>Contact</Heading>
      </a>
      <a href="./index.html">
        <Heading fontSize={20}>Login</Heading>
      </a>
    </HStack>
  );
};

export default NavBar;
