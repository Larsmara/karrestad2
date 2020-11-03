import React from "react";
import { Box, Heading } from "@chakra-ui/core";
import MemberEdit from "@components/memberEdit";
import { members } from "@fixtures/members";

const Members = () => {
  return (
    <Box>
      <Heading fontSize="2xl">Her kan du endre på medlemmer</Heading>
      {members.map((member) => (
        <MemberEdit {...member} />
      ))}
    </Box>
  );
};

export default Members;
