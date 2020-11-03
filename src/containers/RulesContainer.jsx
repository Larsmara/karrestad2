import React from "react";
import { List, UnorderedList, ListItem, Heading, Text } from "@chakra-ui/core";

const RulesContainer = ({ title, text, isAdmin, ...rest }) => {
  return (
    <List pb={4} pt={2} p={4} {...rest}>
      <ListItem>
        <Heading fontSize="2xl">{title}</Heading>
        <Text fontSize="lg">{text}</Text>
      </ListItem>
    </List>
  );
};

export default RulesContainer;
