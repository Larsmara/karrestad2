import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { useRules, useMembers } from './hooks';
import { AppDataContext } from './context';
import { HomePage, RulesPage, MembersPage } from './pages';
require('dotenv').config();

function App() {
  const { rules, loading: rulesLoading } = useRules();
  const { members, loading: membersLoading } = useMembers();

  return (
    <AppDataContext.Provider value={{ rules, rulesLoading, members, membersLoading }}>
      <Switch>
        <Route path={ROUTES.RULES} exact>
          <RulesPage />
        </Route>

        <Route path={ROUTES.MEMBERS} exact>
          <MembersPage />
        </Route>

        <Route path={ROUTES.HOME} exact>
          <HomePage />
        </Route>
      </Switch>
    </AppDataContext.Provider>
  );
}

export default App;
