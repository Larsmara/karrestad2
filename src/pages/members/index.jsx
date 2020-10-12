import React from "react";
import { Heading, Box, Text } from "@chakra-ui/core";
import BasicLayout from "@containers/BasicLayout";
import MembersContainer from "@containers/MembersContainer";
import { members } from "@fixtures/members";

const MembersPage = () => {
  return (
    <BasicLayout>
      <Heading fontSize="3xl" mb={2}>
        Informasjon om styret
      </Heading>
      <Box shadow="md" mb={6} p={4}>
        <Heading fontSize="xl">Kontortid</Heading>
        <Text fontSize="lg">Tid: Torsdager den første i måneden, kl. 18.00</Text>
        <Text fontSize="lg">Styrerommet i nr. 17</Text>
      </Box>
      {members.map((member) => (
        <MembersContainer key={member.name} member={member} />
      ))}
    </BasicLayout>
  );
};

export default MembersPage;
