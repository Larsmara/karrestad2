import React from "react";
import { Flex } from "@chakra-ui/core";

const Container = ({ children, ...rest }) => {
  return (
    <Flex
      justify={{ md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Container;
