import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import { HomePage, RulesPage, MembersPage } from './pages';

function App() {
  return (
    <>
      <Switch>
        <Route path={ROUTES.RULES} exact>
          <RulesPage />
        </Route>

        {/* <Route path={ROUTES.NEWS} exact>
          <NewsPage />
        </Route>
        <Route path={ROUTES.NEWSARTICLE} exact>
          <NewsArticle />
        </Route> */}

        <Route path={ROUTES.MEMBERS} exact>
          <MembersPage />
        </Route>

        {/* <Route path={ROUTES.COMPLAIN} exact>
            <ComplainPlage />
          </Route>

          <IfUserRedirect user={user} loggedInPath={ADMIN_ROUTES.ADMIN} path={ROUTES.LOGIN}>
            <LoginPage />
          </IfUserRedirect>

          <ProtectedNestedRoute user={user} path={ADMIN_ROUTES.ADMIN} /> */}

        <Route path={ROUTES.HOME} exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
