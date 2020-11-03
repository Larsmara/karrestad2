import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES, ADMIN_ROUTES } from "@constants/routes";
import { IfUserRedirect, ProtectedNestedRoute } from "@helpers/routes";
import { HomePage, RulesPage, MembersPage, ComplainPlage, LoginPage } from "./pages";

function App() {
  const [user, setUser] = useState(true);
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

          <IfUserRedirect user={user} loggedInPath={ADMIN_ROUTES.ADMIN} path={ROUTES.LOGIN}>
            <LoginPage />
          </IfUserRedirect>

          <ProtectedNestedRoute user={user} path={ADMIN_ROUTES.ADMIN} />

          <Route path={ROUTES.HOME} exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
