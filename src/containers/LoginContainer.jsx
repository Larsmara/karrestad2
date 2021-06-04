import React, { useState, useContext } from 'react';
import { Box, Flex, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { FirebaseContext } from '../context';

const LoginContainer = () => {
  const { firebase } = useContext(FirebaseContext);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(form.email, form.password);
    } catch (error) {
      setForm({
        email: '',
        password: ''
      });
      setError(error.message);
    }
  };

  return (
    <Flex align='center' justifyContent='center'>
      <Box p={4} shadow='md' width='100%'>
        <Box textAlign='center'>
          <Heading>Innlogging for styremedlemmer</Heading>
        </Box>
        <Box my={4} textAlign='left'>
          <form onSubmit={onSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type='email'
                placeholder='example@example.com'
                name='email'
                onChange={handleChange}
                value={form.email}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                placeholder='*******'
                name='password'
                onChange={handleChange}
                value={form.password}
              />
            </FormControl>
            <Button width='full' mt={4} type='submit' colorScheme='teal'>
              Logg inn
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginContainer;
