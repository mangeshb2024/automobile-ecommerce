import { SimpleGrid, Text } from "@chakra-ui/react";
import useCars from "../hooks/useCars";
import CarCard from "./CarCard";

const CarGrid = () => {
  
  const {cars, error} = useCars();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding='10px' spacing={3}>
        {cars.map((car) =>
            <CarCard key={car.ID} car={car}/>
        )}
      </SimpleGrid>
    </>
  );
};

export default CarGrid;
