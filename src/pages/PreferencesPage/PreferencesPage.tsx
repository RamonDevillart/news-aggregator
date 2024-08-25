import React from 'react';
import { PreferencesPageContainer } from './PreferencesPage..styles';
import Preferences from '../../components/Preferences/Preferences';

const PreferencesPage: React.FC = () => {
  return (
    <PreferencesPageContainer>      
      <Preferences />
    </PreferencesPageContainer>
  );
};

export default PreferencesPage;
