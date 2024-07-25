import useData from "./useData";

export interface Filter {
  filterName: string;
  filterValues: string[];
}
const useFilters = () => useData<Filter>('/filters');

export default useFilters;