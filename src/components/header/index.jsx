import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ROUTES } from '../../constants/routes';
import Logo from '../logo';

const MenuItem = ({ children, isLast, to, articleRouteMatch, ...rest }) => {
  const match =
    useRouteMatch({
      path: to,
      strict: true
    })?.isExact ?? false;

  return (
    <Text
      as={(match || articleRouteMatch) && !isLast ? 'u' : ''}
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      {...rest}
      fontSize='lg'
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <title>Close</title>
    <path
      fill='white'
      d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
    />
  </svg>
);

const MenuIcon = () => (
  <svg width='24px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' fill='white'>
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
);

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      flex='1'
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg={['teal.500', 'teal.500', 'transparent', 'transparent']}
      color={['white', 'white', 'teal.700', 'teal.700']}
      {...props}
    >
      <Flex align='center'>
        <Logo w='120px' color={['white', 'white', 'teal.500', 'teal.500']} />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align='center'
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to={ROUTES.HOME}>Hjem</MenuItem>
          <MenuItem to={ROUTES.RULES}>Regler</MenuItem>
          <MenuItem to={ROUTES.MEMBERS}>Styret</MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
