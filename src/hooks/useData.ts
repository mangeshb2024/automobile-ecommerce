import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
  data: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();
console.log("endpoint: ", endpoint);
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
      .then(res => setData(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
    });

    return () => controller.abort();

  }, deps ? [...deps]: []);

  return {data, error};
};

export default useData;