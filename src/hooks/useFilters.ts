import useData from "./useData";
import config from "../config/config.json"

export interface Filter {
  filterName: string;
  filterValues: string[];
}
const useFilters = () => useData<Filter>(config.filterEndpoint);

export default useFilters;