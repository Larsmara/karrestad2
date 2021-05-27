import React from 'react';
import { Flex } from '@chakra-ui/react';
import { useRouteMatch } from 'react-router-dom';
import Header from '@components/header';
import { Container, Footer } from '@components';
import { ROUTES } from '@constants/routes';

export default function BasicLayout({ children, ...rest }) {
  const isLanding =
    useRouteMatch({
      path: ROUTES.HOME,
      strict: true
    })?.isExact ?? false;

  return (
    <Flex
      direction='column'
      align='center'
      minH='100%'
      maxW={{ xl: '1200px' }}
      m='0 auto'
      pb={6}
      {...rest}
    >
      <Header />
      {isLanding ? children : <Container>{children}</Container>}
      <Footer />
    </Flex>
  );
}
