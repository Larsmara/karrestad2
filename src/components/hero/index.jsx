import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex, Image, Heading, Stack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  cta2Text,
  cta2Link,
  ...rest
}) {
  return (
    <Flex
      align='center'
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap='no-wrap'
      minH='70vh'
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '35%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as='h1'
          size='xl'
          fontWeight='bold'
          color='teal.800'
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as='h2'
          size='md'
          color='teal.800'
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <Flex>
          <Link to={ctaLink}>
            <Button
              colorScheme='teal'
              borderRadius='8px'
              py='4'
              px='4'
              lineHeight='1'
              size='md'
              rightIcon={<ChevronRightIcon />}
            >
              {ctaText}
            </Button>
          </Link>
        </Flex>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '60%' }} mb={{ base: 12, md: 0 }}>
        {/* TODO: Make this change every X secs */}
        <Image src={image} size='100%' rounded='1rem' shadow='2xl' />
      </Box>
    </Flex>
  );
}
