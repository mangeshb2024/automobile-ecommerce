import { Heading, HStack, Image, Stack } from "@chakra-ui/react"
import copyright_logo from '../assets/CopyrightLogo.png'

const Footer = () => {
  return (
    <HStack justify="space-between" paddingX={10} bg="#a2a8af">
        <a href="./index.html">
        <Stack>
         <Image src={copyright_logo} boxSize="150px" />
         <p>Copyright Fictional Corporation</p>
        </Stack>
      </a>
      <a href="./index.html">
        <Heading fontSize={20}>About</Heading>
      </a>
      <a href="https://www.autocarindia.com/car-news">
        <Heading fontSize={20}>What's New?</Heading>
      </a>
      <a href="./index.html">
        <Heading fontSize={20}>Contact</Heading>
      </a>
    </HStack>
  )
}

export default Footer