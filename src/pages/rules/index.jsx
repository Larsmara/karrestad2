import React, { useContext } from 'react';
import { Heading, Box, Spinner } from '@chakra-ui/react';
import { Layout } from '../../components';
import RulesContainer from '../../containers/RulesContainer';
import { AppDataContext } from '../../context';

const RulesPage = () => {
  const { rules } = useContext(AppDataContext);

  if (!rules) {
    return (
      <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
    );
  }

  return (
    <Layout>
      <Box p={4}>
        <Heading>Ordensregler for vårt borettslag</Heading>
        {rules.map((rule) => (
          <RulesContainer key={rule.id} title={rule.title} text={rule.rule} />
        ))}
      </Box>
    </Layout>
  );
};

export default RulesPage;
