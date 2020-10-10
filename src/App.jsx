import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, RulesPage, MembersPage, ComplainPlage, LoginPage } from "./pages";
import ROUTES from "@constants/routes";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={ROUTES.RULES} exact>
            <RulesPage />
          </Route>
          <Route path={ROUTES.MEMBERS} exact>
            <MembersPage />
          </Route>
          <Route path={ROUTES.COMPLAIN} exact>
            <ComplainPlage />
          </Route>
          <Route path={ROUTES.LOGIN} exact>
            <LoginPage />
          </Route>
          <Route path={ROUTES.HOME} exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
