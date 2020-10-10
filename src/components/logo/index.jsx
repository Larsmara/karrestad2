import React from "react";
import { Box, Text } from "@chakra-ui/core";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="xl" fontWeight="bold">
        Karrestad II
      </Text>
    </Box>
  );
}
