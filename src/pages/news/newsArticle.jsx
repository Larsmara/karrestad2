import React from 'react';
import { Layout } from '../../components';
import NewsArticleContainer from '../../containers/NewsArticleContainer';
import '../../styles/globalStyle.css';

const NewsPage = () => {
  return (
    <Layout>
      <NewsArticleContainer />
    </Layout>
  );
};

export default NewsPage;
