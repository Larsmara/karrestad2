import React, { useContext } from 'react';
import { Heading, Box, Text, Skeleton, Stack } from '@chakra-ui/react';
import BasicLayout from '@components/basicLayout';
import MembersContainer from '@containers/MembersContainer';
import { AppDataContext } from '@context';

const MembersPage = () => {
  const { members, membersLoading } = useContext(AppDataContext);

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
    <BasicLayout>
      <Heading fontSize='3xl' mb={2} textAlign='center'>
        Informasjon om styret
      </Heading>
      <Box mb={6} p={4} textAlign='center'>
        <Heading fontSize='xl'>Kontortid</Heading>
        <Text fontSize='lg'>Tid: Torsdager den første i måneden, kl. 18.00 - 19.00</Text>
        <Text fontSize='lg'>Sted: Styrerommet i nr. 17</Text>
        {members?.map((member) => (
          <MembersContainer key={member.name} member={member} />
        ))}
      </Box>
    </BasicLayout>
  );
};

export default MembersPage;
