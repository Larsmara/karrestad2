import React, { useState } from 'react';
import {
  Box,
  Heading,
  Button,
  Flex,
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel
} from '@chakra-ui/react';
import { MemberEdit, EditOfficeHours, AddNewMember } from '@components';
import { members } from '@fixtures/members';

const Members = () => {
  const [addingNewMember, setAddingNewMember] = useState(false);

  const addNewMember = (newMemberData) => {
    console.log(newMemberData);
  };
  const updateMember = (member) => {
    console.log(member);
  };
  return (
    <Box>
      <Heading fontSize='2xl'>Her kan du endre på medlemmer</Heading>
      <Flex mt={4}>
        <Button colorScheme='teal' onClick={() => setAddingNewMember(!addingNewMember)}>
          Legg til nytt medlem
        </Button>
        <Spacer />
      </Flex>
      {addingNewMember && (
        <AddNewMember close={() => setAddingNewMember(false)} addMember={addNewMember} />
      )}
      {members.map((member) => (
        <MemberEdit {...member} key={member.name} update={updateMember} />
      ))}
      <Accordion allowToggle mt={4}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Endre på kontortider
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <EditOfficeHours />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Members;
