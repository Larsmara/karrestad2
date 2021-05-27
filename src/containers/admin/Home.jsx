import React from 'react';
import { Box, Textarea, Flex, ButtonGroup, Button, Spacer, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box>
      <Heading fontSize='2xl'>Her kan du endre på teksten som vises på hjem siden</Heading>
      <Box pt={6} mx={4}>
        <Textarea placeholder='noe tekst' height='150px' />
        <Flex mt={4}>
          <Spacer />
          <ButtonGroup spacing='6'>
            <Button>Avbryt</Button>
            <Button colorScheme='teal'>Lagre</Button>
          </ButtonGroup>
        </Flex>
      </Box>
      <Box width='50%' mt={10}>
        <Heading fontSize='xl' pb={4}>
          Nåværende tekst
        </Heading>
        <Text>
          Dette er en nettside laget for beboere i Karrestad II borettslag. Her kan du finne
          informasjon om styret, ordensregler og sende inn saker til styret.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
