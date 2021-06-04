import { extendTheme } from '@chakra-ui/react';

const newTheme = {
  colors: {
    primary: '#319795',
    primaryDark: '#2C7A7B',
    teal: '#319795'
  },
  fonts: {
    body: 'Poppins, Crimson Text, serif',
    heading: 'Poppins, Crimson Text, serif',
    mono: 'Poppins, Crimson Text, serif'
  }
};

const theme = extendTheme({ newTheme });

export default theme;
