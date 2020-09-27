import React from "react";
import { Card, Button } from "../../components";

const HomePage = () => {
  return (
    <>
      <Card>
        <Card.Header>Test</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit quis, vel quos
          eligendi fugiat dolor voluptatem. Tempora, impedit sequi!
        </Card.Body>
        <Card.Actions>
          <Button>Hei</Button>
        </Card.Actions>
      </Card>

      <Card>
        <Card.Header>Test</Card.Header>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit quis, vel quos
          eligendi fugiat dolor voluptatem. Tempora, impedit sequi!
        </Card.Body>
        <Card.Actions>
          <Button>Hei</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

export default HomePage;
