import React from 'react';
import { PersonalizedFeedContainer, EditPreferencesButton } from './PersonalizedFeed.styles'
import ArticleList from '../ArticleList/ArticleList';

const PersonalizedFeed: React.FC<{ articles: Array<any> }> = ({ articles }) => {
  return (
    <PersonalizedFeedContainer>
      <EditPreferencesButton>Customize Feed</EditPreferencesButton>
      <ArticleList articles={articles} />
    </PersonalizedFeedContainer>
  );
};

export default PersonalizedFeed;
