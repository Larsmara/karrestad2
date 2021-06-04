import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

const MembersContainer = ({ member: { role, name, from } }) => {
  return (
    <Box p={8} m={2} borderWidth='1px' borderRadius='lg' w='48%'>
      <Heading fontSize='xl'>{name}</Heading>
      <Text fontSize='lg'>{`${role}, valgt fra: ${from}`}</Text>
    </Box>
  );
};

export default MembersContainer;
