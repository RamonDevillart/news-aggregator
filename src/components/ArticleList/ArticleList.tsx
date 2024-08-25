import React from 'react';
import { ArticleListContainer } from './ArticleList.styles';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList: React.FC<{ articles: Array<any> }> = ({ articles }) => {
  return (
    <ArticleListContainer>
      {articles.length > 0 ? (
        articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </ArticleListContainer>
  );
};

export default ArticleList;
