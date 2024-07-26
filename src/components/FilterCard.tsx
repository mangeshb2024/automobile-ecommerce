import {
  Box,
  chakra,
  Flex,
  useCheckbox,
  Text,
  useCheckboxGroup,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Filter } from "../hooks/useFilters";
import { useEffect } from "react";

export interface FilterCriteria {
    [key: string]: (string|number)[];
}

interface Props {
  filter: Filter;
  onChange(val: FilterCriteria): void;
}

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      maxW="80"
      bg="green.50"
      border="1px solid"
      borderColor="black"
      rounded="lg"
      px={3}
      py={1}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        border="2px solid"
        borderColor="green.500"
        w={4}
        h={4}
        {...getCheckboxProps()}
      >
        {state.isChecked && <Box w={2} h={2} bg="green.500" />}
      </Flex>
      <Text color="gray.700" {...getLabelProps()}>
        {props.value}
      </Text>
    </chakra.label>
  );
}

const FilterCard = ({ filter, onChange }: Props) => {
  const { value, getCheckboxProps } = useCheckboxGroup();

  useEffect(() => {
    onChange({[filter.filterName]: value});
  }, [value]);

  return (
    <Stack>
      <Heading as="h4" size="md">
        {filter.filterName}
      </Heading>
      {filter.filterValues.map((val) => <CustomCheckbox key={val} value={val} {...getCheckboxProps({ value: val })} />)}
    </Stack>
  );
};

export default FilterCard;
