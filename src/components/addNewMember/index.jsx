import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  IconButton,
  ButtonGroup,
  Stack,
  InputGroup,
  InputLeftAddon,
  Input,
  Select,
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { DatePicker } from '../index';
import { Roles } from '../../constants/memberRoles';

const AddNewMember = ({ addMember, close }) => {
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    from: '',
    to: ''
  });
  const [dateError, setDateError] = useState({
    error: false,
    message: ''
  });

  const dateWithoutTime = (date) => {
    let d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  useEffect(() => {
    const isDatesValid = () => {
      const { from, to } = newMember;

      const fromDate = dateWithoutTime(from);
      const toDate = dateWithoutTime(to);

      if (from !== '' || to !== '') {
        if (fromDate < toDate) {
          setDateError({ error: false, message: '' });
          return true;
        }
        if (fromDate > toDate) {
          setDateError({ error: true, message: 'From cannot be bigger than to' });
          return false;
        }
        if (fromDate === toDate) {
          setDateError({ error: true, message: 'Dates cannot be the same' });
          return false;
        }
      }
    };
    if (isDatesValid()) {
      setDateError('');
    }
  }, [newMember]);

  const editData = () => {
    const newData = [];
    Object.entries(Roles).forEach(([key, value]) => {
      const newObj = {
        key,
        value
      };
      newData.push(newObj);
    });
    return newData;
  };

  const handleAddNewMember = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  return (
    <Box align='left' pt={4}>
      <Flex
        justifyContent='space-between'
        border='1px'
        borderRadius='5px'
        borderColor='teal.500'
        p={2}
      >
        <Box p={2}>
          <Stack>
            <Flex>
              <InputGroup mr={3}>
                <InputLeftAddon>Navn</InputLeftAddon>
                <Input autoFocus value={newMember.name} onChange={handleChange} name='name' />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon borderRightRadius='0'>Rolle</InputLeftAddon>
                <Select borderLeftRadius='0' name='role' onChange={handleChange}>
                  {editData().map((obj) => (
                    <option value={obj.value} key={obj.key}>
                      {obj.value}
                    </option>
                  ))}
                </Select>
              </InputGroup>
            </Flex>
            <Flex>
              <InputGroup mr={3}>
                <InputLeftAddon borderRightRadius='0'>Fra dato</InputLeftAddon>
                <DatePicker
                  name='from'
                  handleChange={(date) => setNewMember({ ...newMember, from: date })}
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon>Til dato</InputLeftAddon>
                <DatePicker
                  name='from'
                  handleChange={(date) => setNewMember({ ...newMember, to: date })}
                />
              </InputGroup>
            </Flex>
          </Stack>
          {dateError.error ? (
            <Alert status='error' mt={4}>
              <AlertIcon />
              {dateError.message}
            </Alert>
          ) : null}
        </Box>

        <Flex alignItems='center'>
          <ButtonGroup>
            <IconButton
              icon={<CheckIcon />}
              disabled={dateError.error}
              onClick={handleAddNewMember}
            />
            <IconButton icon={<CloseIcon />} colorScheme='red' onClick={close} />
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AddNewMember;
