import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Car {
    ID: string;
    manufacturer: string;
    model: string;
    bodytype: string;
    engine: string;
    fuel: string;
    transmission: string;
    transmissionType: string;
    highlight_image: string;
}
  
interface FetchCarsResponse {
    data: Car[];
}

const useCars = () => {

  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();

    apiClient
      .get<FetchCarsResponse>("/cars", {signal: controller.signal})
      .then( (res) => {
        console.log(res.data);
        setCars(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
    });

    return () => controller.abort();

  }, []);

  return {cars, error};

}

export default useCars;