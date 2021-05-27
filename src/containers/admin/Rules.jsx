import React from 'react';
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react';
import { EditableTextArea } from '@components';
import rules from '@fixtures/rules';

const Rules = () => {
  return (
    <>
      <Heading fontSize='2xl' mb={4}>
        Endre eller legg til regler
      </Heading>
      <Accordion allowToggle>
        {Object.keys(rules).map((key) => (
          <AccordionItem key={key}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {key}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <EditableTextArea isExpanded={isExpanded} text={rules[key]} />
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Rules;
