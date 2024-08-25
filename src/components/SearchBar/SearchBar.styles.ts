import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 8px;
  align-items: center;
  padding: 16px;
  margin: 16px auto;
  background-color: #2F2E41;

   @media (max-width: 430px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
`;

export const DateInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SelectInput = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #FF6347;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #FF4500;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;

   @media (max-width: 430px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ClearButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;
