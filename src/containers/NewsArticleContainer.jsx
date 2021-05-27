import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Box, Image, Divider, Heading, Text } from '@chakra-ui/react';

const NewsPage = () => {
  const [article, setArticle] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const hasArticle = location.state?.article !== undefined;

  useEffect(() => {
    if (!hasArticle) {
      history.push('/news');
    }
    if (hasArticle) {
      setArticle(location.state.article);
    }
    return () => setArticle(null);
  }, [hasArticle]);

  if (!hasArticle || article === null) {
    return null;
  }

  return (
    <>
      <Box>
        <Image
          borderRadius='md'
          src={article.picture}
          alt={article.title}
          objectFit='cover'
          w='100%'
          h='100%'
        />
      </Box>
      <Heading mt={4}>{article.title}</Heading>
      <Text as='sub'>
        Av: {article.author}. Publisert:
        {` ${article.date.getDay()}/${article.date.getMonth() + 1}/${article.date.getFullYear()}`}
      </Text>
      <Divider my={4} />
      <Box>{article.text}</Box>
    </>
  );
};

export default NewsPage;
