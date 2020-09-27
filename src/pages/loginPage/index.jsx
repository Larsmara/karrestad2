import React, { useState } from 'react';
import { Button, Input } from '../../components';

const LoginPage = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitted');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className='container'>
      <div className='item'>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input
            id='at-loginEmail'
            label='E-mail'
            name='email'
            type='email'
            value={state.email}
            onChange={handleChange}
            required
          />
          <Input
            id='at-loginPassword'
            label='Password'
            name='password'
            value={state.password}
            type='password'
            onChange={handleChange}
            required
          />
          <Button inverted type='submit'>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
