import React, { useContext, useEffect, useState } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  DateInput,
  SelectInput,
  ClearButton,
  ButtonGroup,
} from './SearchBar.styles';
import { fetchNewsArticles } from '../../services/api';
import { PreferencesContext } from '../../context/PreferencesContext';

const SearchBar: React.FC<{ onSearch: (articles: any[]) => void }> = ({ onSearch }) => {
  const { preferences } = useContext(PreferencesContext);
  const [keyword, setKeyword] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(preferences.category || 'all');
  const [source, setSource] = useState(preferences.source || 'all');

  useEffect(() => {
    setCategory(preferences.category);
    setSource(preferences.source);
  }, [preferences]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const articles = await fetchNewsArticles(keyword, date, category, source);
      onSearch(articles);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleClearFilters = () => {
    setKeyword('');
    setDate('');
    setCategory('all');
    setSource('all');
    onSearch([]);
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchInput
        type="text"
        placeholder="Search articles..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <DateInput
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <SelectInput value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="world">World</option>
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
      </SelectInput>
      <SelectInput value={source} onChange={(e) => setSource(e.target.value)}>
        <option value="all">All Sources</option>
        {/* <option value="newsapi">News Api</option>  //REMOVED DUE TO PAYD VERSION REQUIRED */}  
        <option value="guardian">The Guardian</option>
        <option value="nyt">New York Times</option>
      </SelectInput>
      <ButtonGroup>
        <SearchButton type="submit">Search</SearchButton>
        <ClearButton type="button" onClick={handleClearFilters}>Clear Filters</ClearButton>
      </ButtonGroup>
    </SearchForm>
  );
};

export default SearchBar;
