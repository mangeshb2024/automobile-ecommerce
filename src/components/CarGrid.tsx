import { Text } from "@chakra-ui/react";
import useCars from "../hooks/useCars";

const CarGrid = () => {
  
  const {cars, error} = useCars();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {cars.map((car) => (
          <li key={car.ID}>
            {car.ID + " - " + car.manufacturer + " - " + car.model}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CarGrid;
