import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES, ADMIN_ROUTES } from '@constants/routes';
import { IfUserRedirect, ProtectedNestedRoute } from '@helpers/routes';
import useAuthListener from '@hooks/useAuthListener';
import {
  HomePage,
  RulesPage,
  MembersPage,
  ComplainPlage,
  LoginPage,
  NewsPage,
  NewsArticle
} from './pages';

function App() {
  const { user } = useAuthListener();

  return (
    <>
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
    </>
  );
}

export default App;
