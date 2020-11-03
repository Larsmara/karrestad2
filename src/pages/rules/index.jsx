import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/core";
import BasicLayout from "@components/basicLayout";
import RulesContainer from "@containers/RulesContainer";
import { rules } from "@fixtures/rules";

const RulesPage = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <BasicLayout>
      <Box shadow="md" p={4}>
        <Heading>Ordensregler for vårt borettslag</Heading>
        {Object.keys(rules).map((key) => (
          <RulesContainer key={key} title={key} text={rules[key]} isAdmin={isAdmin} />
        ))}
      </Box>
    </BasicLayout>
  );
};

export default RulesPage;
