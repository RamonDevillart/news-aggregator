import styled from 'styled-components';

export const PreferencesContainer = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const PreferencesSection = styled.div`
  margin-bottom: 16px;
`;

export const PreferenceLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PreferenceCheckbox = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const SaveButton = styled.button`
  padding: 8px 16px;
  background-color: #2F2E41;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top:12px;

  &:hover {
    background-color: #3E3D56;
  }
`;
