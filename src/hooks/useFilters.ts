import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Filter {
  filterName: string;
  filterValues: string[];
}

interface FetchFiltersResponse {
  data: Filter[];
}

const useFilters = () => {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();

    apiClient
      .get<FetchFiltersResponse>("/filters", {signal: controller.signal})
      .then( (res) => {
        console.log(res.data)
        setFilters(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
    });

    return () => controller.abort();

  }, []);

  return {filters, error};
};

export default useFilters;