import React from 'react';
import {
  FiltersContainer,
  FilterGroup,
  FilterLabel,
  DateInput,
  SelectInput,
  ApplyButton,
} from './Filters.styles';

const Filters: React.FC = () => {
  return (
    <FiltersContainer>
      <FilterGroup>
        <FilterLabel htmlFor="date">Date:</FilterLabel>
        <DateInput type="date" id="date" />
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="category">Category:</FilterLabel>
        <SelectInput id="category">
          <option value="all">All</option>
          <option value="world">World</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
        </SelectInput>
      </FilterGroup>
      <FilterGroup>
        <FilterLabel htmlFor="source">Source:</FilterLabel>
        <SelectInput id="source">
          <option value="all">All</option>
          <option value="bbc">BBC</option>
          <option value="guardian">The Guardian</option>
          <option value="nyt">New York Times</option>
        </SelectInput>
      </FilterGroup>
      <ApplyButton>Apply Filters</ApplyButton>
    </FiltersContainer>
  );
};

export default Filters;
