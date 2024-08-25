import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  color: #333;
`;

export const DateInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SelectInput = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ApplyButton = styled.button`
  padding: 8px 16px;
  background-color: #2F2E41;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #3E3D56;
  }
`;
