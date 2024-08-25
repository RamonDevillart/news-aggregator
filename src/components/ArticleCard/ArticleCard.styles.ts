import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ArticleTitle = styled.h3`
  padding: 16px;
  font-size: 18px;
  color: #2F2E41;
`;

export const ArticleSnippet = styled.p`
  padding: 0 16px;
  font-size: 14px;
  color: #666;
`;

export const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f5f5f5;
  border-top: 1px solid #eee;
`;

export const ArticleSource = styled.span`
  font-size: 14px;
  color: #2F2E41;
  font-weight: bold;
`;

export const ArticleDate = styled.span`
  font-size: 14px;
  color: #999;
`;
