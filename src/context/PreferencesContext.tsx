import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Preferences = {
  category: string;
  source: string;
};

type PreferencesContextType = {
  preferences: Preferences;
  setPreferences: (preferences: Preferences) => void;
};

const defaultPreferences: Preferences = {
  category: 'all',
  source: 'all',
};

export const PreferencesContext = createContext<PreferencesContextType>({
  preferences: defaultPreferences,
  setPreferences: () => {},
});

export const PreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preferences, setPreferencesState] = useState<Preferences>(defaultPreferences);

  useEffect(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    if (savedPreferences) {
      setPreferencesState(JSON.parse(savedPreferences));
    }
  }, []);

  const setPreferences = (newPreferences: Preferences) => {
    setPreferencesState(newPreferences);
    localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
  };

  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
};
