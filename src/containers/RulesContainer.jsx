import React from "react";
import { Box, UnorderedList, ListItem, Heading, Text } from "@chakra-ui/core";

const RulesContainer = ({ title, text, isAdmin, ...rest }) => {
  return (
    <Box pb={4} pt={2} p={4}>
      <Heading fontSize="2xl">{title}</Heading>
      <UnorderedList>
        <ListItem>
          <Text fontSize="lg">{text}</Text>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default RulesContainer;
