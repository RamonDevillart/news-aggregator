import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import PreferencesPage from './pages/PreferencesPage/PreferencesPage';
import { PreferencesProvider } from './context/PreferencesContext';

const App: React.FC = () => {
  return (
    <PreferencesProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preferences" element={<PreferencesPage />} />
        </Routes>
      </Router>
    </PreferencesProvider>
  );
};

export default App;
