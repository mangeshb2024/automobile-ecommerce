import { SimpleGrid, Text } from "@chakra-ui/react";
import useCars from "../hooks/useCars";
import CarCard from "./CarCard";
import { FilterCriteria } from "./FilterCard";

interface Props {
  selectedFilters: FilterCriteria[] | null;
}

const CarGrid = ({selectedFilters}: Props) => {
  
  const {data, error} = useCars(selectedFilters);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} padding='10px' spacing={3}>
        {data.map((car) =>
            <CarCard key={car.ID} car={car}/>
        )}
      </SimpleGrid>
    </>
  );
};

export default CarGrid;
