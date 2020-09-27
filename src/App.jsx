import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Navbar } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <>
      <Navbar>Lars</Navbar>
      <Container>
        <Switch>
          <Route exact path="/contact">
            Contact
          </Route>
          <Route exact path="/complain">
            Complain
          </Route>
          <Route exact path="/rules">
            Rules
          </Route>
          <Route exact path="/login">
            Login
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
