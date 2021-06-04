import React from 'react';
import { Flex, Box, Button, Stack, Spacer } from '@chakra-ui/react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header } from '../index';

const MenuItemButton = ({ children, to = '/', ...rest }) => {
  const match =
    useRouteMatch({
      path: `/admin${to}`,
      strict: true
    })?.isExact ?? false;

  const buttonColor = match
    ? { bg: 'teal.700', color: 'white', _hover: { bg: 'teal.600' } }
    : { colorScheme: 'teal' };

  return (
    <Button mb={{ base: 8, sm: 0 }} as={Link} to={`/admin${to}`} {...buttonColor} {...rest}>
      {children}
    </Button>
  );
};

const AdminLayout = ({ children }) => {
  return (
    <Flex direction='column' maxW={{ xl: '1200px' }} m='0 auto' pb={6}>
      <Header />

      <Flex direction={{ base: 'column', md: 'row' }} wrap='no-wrap' minH='80vh' px={8}>
        <Box
          p={4}
          w={{ base: '100%', md: '25%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
          shadow='md'
          mr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
        >
          <Flex direction='column' justifyContent='space-between'>
            <Stack>
              <MenuItemButton to='/'>Portal</MenuItemButton>
              <MenuItemButton to='/rules'>Edit Rules page</MenuItemButton>
              <MenuItemButton to='/members'>Edit Members page</MenuItemButton>
              <MenuItemButton to='/home'>Edit Home page</MenuItemButton>
              <MenuItemButton to='/complaints'>Manage complaints</MenuItemButton>
              <MenuItemButton to='/news'>Add News</MenuItemButton>
            </Stack>
          </Flex>
        </Box>
        <Box
          w={{ base: '100%', sm: '60%', md: '73%' }}
          align='center'
          p={4}
          mb={{ base: 12, md: 0 }}
          shadow='md'
          h='80vh'
          overflowY='auto'
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminLayout;
