import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, ComplainPage, ContactPage, RulesOfOrder } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/complain" component={ComplainPage} />
          <Route exact path="/rules" component={RulesOfOrder} />
        </Switch>
      </div>
    </>
  );
}

export default App;
