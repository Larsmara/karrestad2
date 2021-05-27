import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { FirebaseContext } from '@context';
import { FieldValue, firebase } from './lib/firebase';
import theme from './lib/theme';
import './styles/globalStyle.css';
import App from './App';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
