import React from 'react';
import BasicLayout from '@components/basicLayout';
import NewsArticleContainer from '@containers/NewsArticleContainer';
import '../../styles/globalStyle.css';

const NewsPage = () => {
  return (
    <BasicLayout>
      <NewsArticleContainer />
    </BasicLayout>
  );
};

export default NewsPage;
