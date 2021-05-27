import React from 'react';
import { Container as UiContainer } from '@chakra-ui/react';

const Container = ({ children, ...rest }) => {
  return (
    <UiContainer maxW='110ch' mb={4} {...rest} h='80vh' overflowY='auto' shadow='md'>
      {children}
    </UiContainer>
  );
};

export default Container;
