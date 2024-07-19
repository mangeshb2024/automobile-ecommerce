import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Image,
  VStack
} from "@chakra-ui/react";
import { Car } from "../hooks/useCars";
import ImageGallery from "./ImageGallery";
import Like from "./Like";
import { useState } from "react";

interface Props {
  car: Car;
}

const CarCard = ({ car}: Props) => {

  const [like, setLike] = useState(false);

  const transmissionType =
    car.engine === "Electric" ? null : car.transmission === "Manual" ? null : (
      <Heading as="h4" size="md">
        {"Transmission Type: " + car.transmissionType}
      </Heading>
    );
  const backgroundColor =
    car.engine === "Electric"
      ? "#03fc8c"
      : car.fuel.includes("Hybrid")
      ? "#03b5fc"
      : "#a2a8af";

  return (
    <Card
      borderRadius={10}
      border="solid"
      borderWidth="3px"
      overflow="hidden"
      variant="outline"
      background={backgroundColor}
    >
      <CardHeader>
        <Heading fontSize="2xl">{car.manufacturer + " " + car.model}</Heading>
      </CardHeader>
      <Image src={car.highlight_image} />
      <CardBody>
        <HStack justifyContent="space-between" align="start">
          <div>
            <Heading as="h4" size="md">
              {"Body Type: " + car.bodytype}
            </Heading>
            <Heading as="h4" size="md">
              {"Engine: " + car.engine}
            </Heading>
            <Heading as="h4" size="md">
              {"Fuel: " + car.fuel}
            </Heading>
            <Heading as="h4" size="md">
              {"Transmission: " + car.transmission}
            </Heading>
            {transmissionType}
          </div>
          <VStack alignContent={'space-between'}>
            <ImageGallery></ImageGallery>
            <Like like={like} onClick={() => setLike(!like)}></Like>
          </VStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CarCard;
