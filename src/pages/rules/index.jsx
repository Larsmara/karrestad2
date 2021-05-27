import React from 'react';
import { Heading, Box, Spinner } from '@chakra-ui/react';
import BasicLayout from '@components/basicLayout';
import RulesContainer from '@containers/RulesContainer';
import useRules from '@hooks/useRules';

const RulesPage = () => {
  const { rules, loading } = useRules();

  return (
    <BasicLayout>
      <Box p={4}>
        <Heading>Ordensregler for vårt borettslag</Heading>
        {loading ? (
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
        ) : (
          <>
            {rules.map((rule) => (
              <RulesContainer key={rule.id} title={rule.title} text={rule.rule} />
            ))}
          </>
        )}
      </Box>
    </BasicLayout>
  );
};

export default RulesPage;
