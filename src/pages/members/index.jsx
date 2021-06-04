import React, { useContext } from 'react';
import { Heading, Box, Text, Skeleton, Stack, Flex, Divider } from '@chakra-ui/react';
import { Layout } from '../../components';
import MembersContainer from '../../containers/MembersContainer';
import { AppDataContext } from '../../context';
import Roles from '../../constants/memberRoles';

const MembersPage = () => {
  const { members, membersLoading } = useContext(AppDataContext);

  const styreLeder = () => {
    if (members) {
      return members.filter((member) => member.role === Roles.leader);
    }
    return null;
  };

  const styreMedlem = () => {
    if (members) {
      return members.filter((member) => member.role === Roles.member);
    }
    return null;
  };

  const varaMedlem = () => {
    if (members) {
      return members.filter((member) => member.role === Roles.deputyMember);
    }
    return null;
  };

  if (membersLoading) {
    return (
      <Stack>
        <Skeleton height='50px' />
        <Skeleton height='50px' />
        <Skeleton height='50px' />
      </Stack>
    );
  }
  return (
    <Layout>
      <Heading fontSize='3xl' mb={2} textAlign='center'>
        Informasjon om styret
      </Heading>
      <Box mb={6} p={4} textAlign='center'>
        <Heading fontSize='xl'>Kontortid</Heading>
        <Text fontSize='lg'>Tid: Tirsdager den første i måneden, kl. 18.00 - 19.00</Text>
        <Text fontSize='lg'>Sted: Styrerommet i nr. 17</Text>
        <Divider my={4} />

        <Heading fontSize='2xl'>{Roles.leader}</Heading>
        <Flex justify='center' p={4}>
          {styreLeder()?.map((member) => (
            <MembersContainer key={member.name} member={member} />
          ))}
        </Flex>

        <Heading fontSize='2xl'>{Roles.member}</Heading>
        <Flex justify='center' p={4} m={4} wrap='wrap !important'>
          {styreMedlem()?.map((member) => (
            <MembersContainer key={member.name} member={member} />
          ))}
        </Flex>

        <Heading fontSize='2xl'>{Roles.deputyMember}</Heading>
        <Flex justify='center' p={4} m={4} wrap='wrap !important'>
          {varaMedlem()?.map((member) => (
            <MembersContainer key={member.name} member={member} />
          ))}
        </Flex>
      </Box>
    </Layout>
  );
};

export default MembersPage;
