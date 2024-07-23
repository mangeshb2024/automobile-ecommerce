import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useFilters from "../hooks/useFilters";
import FilterCard from "./FilterCard";
//<ul>
//        {filters.map(filter => <li key={filter.filterName}>{filter.filterName}</li>)}
//    </ul>
//{filters.map((filter) => (
//    <Heading as="h4" size='md'>{filter.filterName}</Heading>
//  ))}
const FilterList = () => {
  const { filters, error } = useFilters();
  console.log("Hello World -> ", filters[0]);

  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading marginLeft={2}>Filters</Heading>
      <SimpleGrid columns={1} padding="10px" spacing={3}>
      {filters.map((filter) =>
            <FilterCard key={filter.filterName} filter={filter}/>
        )}
      </SimpleGrid>
    </>
  );
};

export default FilterList;
