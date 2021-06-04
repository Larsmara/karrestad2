import React from 'react';
import { Box, Container, Stack, Text, useColorModeValue, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      bottom='0'
      position='fixed'
      height='60px'
      w='100%'
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Text>
            Kontakt oss på tlf:
            <Link href='tel:+4747679217'> 476 79 217</Link>
          </Text>
          <Text>
            Mail:{' '}
            <Link display='inline' href='mailto:abborfiskern@gmail.com'>
              abborfiskern@gmail.com
            </Link>
          </Text>
        </Stack>
        <Text>© 2021 Lars-Martin Antonsen</Text>
      </Container>
    </Box>
  );
}
