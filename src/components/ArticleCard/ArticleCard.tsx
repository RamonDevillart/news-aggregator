import React from 'react';
import {
  CardContainer,
  ArticleImage,
  ArticleTitle,
  ArticleSnippet,
  ArticleFooter,
  ArticleSource,
  ArticleDate,
} from './ArticleCard.styles';

const ArticleCard: React.FC<{ article: any }> = ({ article }) => {
  return (
    <CardContainer href={article.web_url} target="_blank" rel="noopener noreferrer">
      {article.imageUrl && <ArticleImage src={article.imageUrl} alt={article.title} />}
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleSnippet>{article.snippet}</ArticleSnippet>
      <ArticleFooter>
        <ArticleSource>{article.source}</ArticleSource>
        <ArticleDate>{new Date(article.date).toLocaleDateString()}</ArticleDate>
      </ArticleFooter>
    </CardContainer>
  );
};

export default ArticleCard;
