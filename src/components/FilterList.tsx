import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useFilters from "../hooks/useFilters";
import FilterCard, { FilterCriteria } from "./FilterCard";
import { useEffect, useState } from "react";

interface Props {
    onChange: (filterCriteriaList: FilterCriteria[] | null) => void;
}

const FilterList = ({onChange}: Props) => {
  const { data, error } = useFilters();
  const [filterCriteriaList, setFilterCriteriaList] = useState<
    FilterCriteria[] | null
  >();

  useEffect(() => {
    console.log("Inside useEffect: ", filterCriteriaList);
    if(filterCriteriaList) onChange(filterCriteriaList);
  }, [filterCriteriaList]);

  return (
    <>
      {error && <Text>{error}</Text>}
      <Heading marginLeft={2}>Filters</Heading>
      <SimpleGrid columns={1} padding="10px" spacing={3}>
        {data.map((filter) => (
          <FilterCard
            onChange={(val) => {
              const val_key = Object.keys(val)[0];
              if (!filterCriteriaList) {
                if (val[val_key].length > 0) {
                  setFilterCriteriaList([val]);
                }
              } else {
                const updatedCriteriaList = filterCriteriaList.filter(
                  (criteria) => Object.keys(criteria)[0] != val_key
                );
                if (val[val_key].length > 0) {
                  setFilterCriteriaList([...updatedCriteriaList, val]);
                } else {
                  setFilterCriteriaList([...updatedCriteriaList]);
                }
              }
            }}
            key={filter.filterName}
            filter={filter}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default FilterList;
