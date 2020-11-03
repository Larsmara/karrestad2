import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  IconButton,
  ButtonGroup,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  Select
} from "@chakra-ui/core";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import DatePicker from "@components/datePicker";
import { Roles } from "@constants/memberRoles";

const MemberEdit = ({ name, role, from, to }) => {
  const [isEditing, setIsEditing] = useState(false);

  const setEditing = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const editData = () => {
    const newData = [];
    Object.entries(Roles).forEach(([key, value]) => {
      let newObj = {
        key,
        value
      };
      newData.push(newObj);
    });
    return newData;
  };

  return (
    <Box align="left" pt={4}>
      <Flex
        justifyContent="space-between"
        border={isEditing ? "1px" : null}
        borderRadius={isEditing ? "5px" : null}
        borderColor={isEditing ? "teal.500" : null}
        p={2}
      >
        {isEditing ? (
          <Box p={2}>
            <Stack>
              <Flex>
                <InputGroup mr={3}>
                  <InputLeftAddon children="Navn" />
                  <Input value={name} />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon children="Rolle" borderRightRadius="0" />
                  <Select borderLeftRadius="0">
                    {editData().map((obj) => (
                      <option value={obj.value} selected={role === obj.value} key={obj.key}>
                        {obj.value}
                      </option>
                    ))}
                  </Select>
                </InputGroup>
              </Flex>
              <Flex>
                <InputGroup mr={3}>
                  <InputLeftAddon children="Fra dato" borderRightRadius="0" />
                  <DatePicker />
                </InputGroup>

                <InputGroup>
                  <InputLeftAddon children="Til dato" />
                  <DatePicker />
                </InputGroup>
              </Flex>
            </Stack>
          </Box>
        ) : (
          <Box>
            <Heading fontSize="lg">{name}</Heading>
            <Text>{`Rolle: ${role}. Fra: ${from} - Til: ${to}`}</Text>
          </Box>
        )}

        <Flex alignItems="center">
          {isEditing ? (
            <ButtonGroup>
              <IconButton icon={<CheckIcon />} />
              <IconButton icon={<CloseIcon />} onClick={setEditing} />
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <IconButton icon={<EditIcon />} onClick={setEditing} />
              <IconButton icon={<CloseIcon />} colorScheme="red" />
            </ButtonGroup>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default MemberEdit;
