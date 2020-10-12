import React from "react";
import { Box, Text, Heading } from "@chakra-ui/core";

const MembersContainer = ({ member: { role, name, from, to } }) => {
  const toDate = (date) => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    return `${day}.${month}.${year}`;
  };
  return (
    <Box p={4} mb={4} shadow="md">
      <Heading fontSize="xl">{name}</Heading>
      <Text fontSize="lg">{`${role}, fra: ${from} - til: ${toDate(to)}`}</Text>
    </Box>
  );
};

export default MembersContainer;
