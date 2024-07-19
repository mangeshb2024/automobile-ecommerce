import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Car {
  ID: string;
  manufacturer: string;
  model: string;
}

interface FetchCarsResponse {
  data: Car[];
}

const CarGrid = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchCarsResponse>("/cars")
      .then((res) => setCars(res.data))
      .catch((err) => setError(err.message));
  }, []);

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
