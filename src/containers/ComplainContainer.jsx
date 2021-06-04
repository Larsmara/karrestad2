import React, { useState } from 'react';
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
  Text,
  FormControl,
  FormLabel,
  FormHelperText
} from '@chakra-ui/react';
import apartments from '../fixtures/apartments';

const ComplainContainer = () => {
  const [newComplaint, setNewComplaint] = useState({
    name: '',
    apartment: '',
    text: ''
  });
  const [error, setError] = useState({
    name: false,
    apartment: false,
    text: false
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewComplaint({ ...newComplaint, [name]: value });
  }

  function handleSave() {
    const { name, apartment, text } = newComplaint;
    if (name === '') {
      return setError({ ...error, name: true });
    }
    if (apartment === '') {
      return setError({ ...error, apartment: true });
    }
    if (text === '') {
      return setError({ ...error, text: true });
    }

    /* addNewComplaint({
      name: newComplaint.name,
      apartment: newComplaint.apartment.replace(/\\/g, ''),
      text: newComplaint.text,
      date: new Date()
    }); */
  }

  function handleCancel() {
    setNewComplaint({ name: '', apartment: '', text: '' });
    setError({ name: false, apartment: false, text: false });
  }

  return (
    <>
      <Box shadow='md' p={4}>
        <Heading fontSize='xl'>
          Har du en klage eller sak du vil ta opp med styret? Send inn din sak her!
        </Heading>
        <Box mt={3}>
          <FormControl id='name' mb={4}>
            <FormLabel>Navn:</FormLabel>
            <Input
              isInvalid={error.name}
              placeholder='Navn'
              name='name'
              value={newComplaint.name}
              onChange={handleChange}
            />
            {error.name && <FormHelperText color='red'>Venligst fyll inn ditt navn</FormHelperText>}
          </FormControl>

          <FormControl id='apartmentSelect' mb={4}>
            <FormLabel>Leilighet:</FormLabel>
            <Select
              placeholder='Ditt bruksnummer'
              name='apartment'
              onChange={handleChange}
              isInvalid={error.apartment}
            >
              {apartments.map((apt) => (
                <option key={`${apt.oppgang}-${apt.nummer}`} value={JSON.stringify(apt)}>
                  {`Oppgang: ${apt.oppgang}, Nr. ${apt.nummer}`}
                </option>
              ))}
            </Select>
            {error.apartment && (
              <FormHelperText>Leilighetsnummer kan ikke være tomt</FormHelperText>
            )}
          </FormControl>

          <FormControl id='complaintText'>
            <FormLabel>Din sak/klage:</FormLabel>
            <Textarea
              isInvalid={error.text}
              placeholder='Skriv inn din sak her...'
              name='text'
              value={newComplaint.text}
              onChange={handleChange}
            />
            {error.text && <FormHelperText>Feltet kan ikke være tomt</FormHelperText>}
          </FormControl>
        </Box>
      </Box>

      <Flex mt={4}>
        <Spacer />
        <ButtonGroup spacing='6'>
          <Button onClick={handleCancel}>Avbryt</Button>
          <Button colorScheme='teal' onClick={handleSave}>
            Lagre
          </Button>
        </ButtonGroup>
      </Flex>

      <Box p={4} mt={8}>
        <Text fontSize='lg'>
          Om du har en sak som angår styret eller om du har noe du vil ta opp, kan du sende inn din
          sak her. Saken vil bli gått gjennom av styret.
        </Text>
      </Box>
    </>
  );
};

export default ComplainContainer;
