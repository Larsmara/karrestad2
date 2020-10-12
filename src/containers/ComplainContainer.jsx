import React from "react";
import {
  Heading,
  Box,
  Input,
  Select,
  Textarea,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Text
} from "@chakra-ui/core";

const ComplainContainer = () => {
  return (
    <>
      <Box shadow="md" p={4}>
        <Heading fontSize="xl">
          Har du en klage eller sak du vil ta opp med styret? Send inn din sak her!
        </Heading>
        <Box mt={3}>
          <form>
            <Input placeholder="Navn" />
            <Select placeholder="Leilighet" mt={4}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Textarea mt={4} placeholder="Skriv inn din sak her..." />
            <Flex mt={2}>
              <Box>Ditt bilde</Box>
              <Spacer />
              <Box>
                <Button colorScheme="primary" size="md">
                  Last opp bilde
                </Button>
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>

      <Flex mt={4}>
        <Spacer />
        <ButtonGroup spacing="6">
          <Button>Avbryt</Button>
          <Button colorScheme="primary">Lagre</Button>
        </ButtonGroup>
      </Flex>

      <Box shadow="md" p={4} mt={8}>
        <Text fontSize="lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tempore incidunt minima,
          eligendi eos laboriosam sint rerum voluptas et illo laudantium sapiente aspernatur fugiat
          delectus earum, ipsum aperiam error? Illo eveniet minima sint deserunt esse fugit
          dignissimos ipsum fuga neque.
        </Text>
      </Box>
    </>
  );
};

export default ComplainContainer;
