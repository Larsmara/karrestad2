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
import apartments from "@fixtures/apartments";

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
            <Select placeholder="Ditt bruksnummer" mt={4}>
              {apartments.map((apt) => (
                <option
                  key={`${apt.oppgang}-${apt.nummer}`}
                  value={{ nr: apt.nummer, door: apt.oppgang }}
                >
                  {`Oppgang: ${apt.oppgang}, Nr. ${apt.nummer}`}
                </option>
              ))}
            </Select>
            <Textarea mt={4} placeholder="Skriv inn din sak her..." />
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
