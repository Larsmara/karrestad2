import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import theme from './lib/theme';
import './styles/globalStyle.css';
import App from './App';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
