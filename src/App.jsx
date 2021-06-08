import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { ROUTES, ADMIN_ROUTES } from './constants/routes';
import { useRules, useMembers } from './hooks';
import { IfUserRedirect, ProtectedNestedRoute } from './helpers/routes';
import { AppDataContext } from './context';
import useAuthListener from './hooks/useAuthListener';
import {
  HomePage,
  RulesPage,
  MembersPage,
  ComplainPlage,
  LoginPage,
  NewsArticle,
  NewsPage
} from './pages';
require('dotenv').config();

function App() {
  const { rules, loading: rulesLoading } = useRules();
  const { members, loading: membersLoading } = useMembers();
  const { user } = useAuthListener();

  return (
    <AppDataContext.Provider value={{ rules, rulesLoading, members, membersLoading, user }}>
      <Switch>
        <Route path={ROUTES.RULES} exact>
          <RulesPage />
        </Route>

        <Route path={ROUTES.NEWS} exact>
          <NewsPage />
        </Route>
        <Route path={ROUTES.NEWSARTICLE} exact>
          <NewsArticle />
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
    </AppDataContext.Provider>
  );
}

export default App;
