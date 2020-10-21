import React from "react";
import { Container as UiContainer } from "@chakra-ui/core";

const Container = ({ children, ...rest }) => {
  return (
    <UiContainer maxW="110ch" mb={4} {...rest}>
      {children}
    </UiContainer>
  );
};

export default Container;
