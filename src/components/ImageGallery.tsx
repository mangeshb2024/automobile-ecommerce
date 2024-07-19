import { Badge } from "@chakra-ui/react";
import { FaImages } from "react-icons/fa";

const ImageGallery = () => {
  return (
    <a href="#">
      <Badge
        title={"Image Gallery"}
        colorScheme="black"
        fontSize="50px"
        borderRadius="4px"
      >
        <FaImages />
      </Badge>
    </a>
  );
};

export default ImageGallery;
