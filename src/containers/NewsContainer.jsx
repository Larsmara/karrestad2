import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  VStack,
  StackDivider,
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import news from '../fixtures/news';

const NewsContainer = () => {
  const history = useHistory();
  const sortedNews = news.sort((a, b) => b.date.getTime() - a.date.getTime());

  const handleGoToArticle = (article) => {
    history.push({
      pathname: `/news/${article.id}`,
      state: { article }
    });
  };

  return (
    <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='stretch' pt={4}>
      {sortedNews.map((article) => (
        <Box
          p={2}
          _hover={{ transform: 'scale(1.01)', cursor: 'pointer' }}
          key={article.id}
          onClick={() => handleGoToArticle(article)}
        >
          <Grid h='140px' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem rowSpan={2} colSpan={1}>
              <Image
                src={article.picture}
                alt={article.title}
                objectFit='cover'
                h='100%'
                w='100%'
              />
            </GridItem>
            <GridItem colSpan={4}>
              <VStack align='stretch'>
                <Box as='time' dateTime={article.date}>
                  {Math.round(Math.abs((article.date - new Date()) / (24 * 60 * 60 * 1000)))} days
                  ago
                </Box>
                <Heading>{article.title}</Heading>
                <Text as='sub' fontSize='md'>
                  {article.description}
                </Text>
              </VStack>
            </GridItem>
            <GridItem colSpan={4}>
              <Link
                to={{
                  pathname: `/news/${article.id}`,
                  state: { article }
                }}
              >
                <Button
                  colorScheme='teal'
                  borderRadius='8px'
                  py='4'
                  px='4'
                  lineHeight='1'
                  size='sm'
                  rightIcon={<ChevronRightIcon />}
                >
                  Les Mer
                </Button>
              </Link>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </VStack>
  );
};

export default NewsContainer;
