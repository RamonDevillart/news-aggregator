import React, { useState } from 'react';
import { HomeContainer } from './Home.styles';
import ArticleList from '../../components/ArticleList/ArticleList';
import SearchBar from '../../components/SearchBar/SearchBar';


const Home: React.FC = () => {
  const [articles, setArticles] = useState<Array<any>>([]); 

  return (
    <HomeContainer>     
      <SearchBar onSearch={setArticles} />
      <ArticleList articles={articles} />
    </HomeContainer>
  );
};

export default Home;
