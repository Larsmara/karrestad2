import React from "react";
import styled from "styled-components";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardActions from "./CardActions";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  width: 30rem;
  height: 30rem;
  margin: 1rem;
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Actions = CardActions;

export default Card;
