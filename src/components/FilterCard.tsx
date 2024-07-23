import { Filter } from '../hooks/useFilters';
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

interface Props {
    filter: Filter;
}

const FilterCard = ({filter}: Props) => {
  return (
    <Card marginLeft={5}>
        <CardHeader padding={1}>
            <Heading size='md'>{filter.filterName}</Heading>
        </CardHeader>
        <CardBody padding={1}>
            <ul>
                {filter.filterValues.map(val => <li key={val}>{val}</li>)}
            </ul>
        </CardBody>
    </Card>
  )
}

export default FilterCard