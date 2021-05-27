import React, { useContext } from 'react';
import { Heading } from '@chakra-ui/react';

const HandleComplaints = () => {
  const complaints = [
    {
      id: Math.random(),
      name: 'Lars',
      apartment: 'H0104',
      text: 'Lars tester complaint'
    }
  ];
  return (
    <>
      <Heading fontSize='2xl'>Håndter klager/saker</Heading>
      {complaints.map((complaint) => (
        <div key={complaint.id}>
          <h4>{complaint.name}</h4>
          <p>{complaint.apartment}</p>
          <p>{complaint.text}</p>
        </div>
      ))}
    </>
  );
};

export default HandleComplaints;
