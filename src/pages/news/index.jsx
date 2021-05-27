import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import BasicLayout from '@components/basicLayout';
import NewsContainer from '@containers/NewsContainer';

const NewsPage = () => {
  return (
    <BasicLayout>
      <Box>
        <Heading>Nyheter</Heading>
      </Box>
      <NewsContainer />
    </BasicLayout>
  );
};

export default NewsPage;
