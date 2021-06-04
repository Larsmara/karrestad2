import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import { Layout } from '../../components';
import NewsContainer from '../../containers/NewsContainer';

const NewsPage = () => {
  return (
    <Layout>
      <Box>
        <Heading>Nyheter</Heading>
      </Box>
      <NewsContainer />
    </Layout>
  );
};

export default NewsPage;
