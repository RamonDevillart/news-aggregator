import React, { useContext, useState } from 'react';
import {
  PreferencesContainer,
  PreferencesSection,
  PreferenceLabel,
  PreferenceCheckbox,
  SaveButton,
} from './Preferences.styles';
import { PreferencesContext } from '../../context/PreferencesContext';
import { SelectInput } from '../SearchBar/SearchBar.styles';

const Preferences: React.FC = () => {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const [category, setCategory] = useState(preferences.category);
  const [source, setSource] = useState(preferences.source);

  const handleSavePreferences = () => {
    setPreferences({ category, source });
  };

  return (
    <PreferencesContainer>
      <h2>Preferences</h2>
      <div>
        <PreferenceLabel>Preferred Category:</PreferenceLabel>
        <SelectInput value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="world">World</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
        </SelectInput>
      </div>
      <div>
        <PreferenceLabel>Preferred Source:</PreferenceLabel>
        <SelectInput value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="all">All Sources</option>
          {/* <option value="newsapi">News Api</option> //REMOVED DUE TO PAYD VERSION REQUIRED */}
          <option value="guardian">The Guardian</option>
          <option value="nyt">New York Times</option>
        </SelectInput>
      </div>
      <SaveButton onClick={handleSavePreferences}>Save Preferences</SaveButton>
    </PreferencesContainer>
  );
};

export default Preferences;