import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminLayout from '@components/adminLayout';
import {
  AdminPortal,
  AdminRules,
  AdminMembers,
  AdminHome,
  AdminNews,
  HandleComplaints
} from '@containers/admin';

export const IfUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        if (!user) {
          return <Redirect to={{ pathname: '/', state: { from: location } }} />;
        }
        return null;
      }}
    />
  );
};

export const ProtectedNestedRoute = ({ user }) => (
  <Route
    path='/admin/'
    render={({ match: { url }, location }) => {
      if (user) {
        return (
          <AdminLayout>
            <Route path={`${url}/`} component={AdminPortal} exact />
            <Route path={`${url}/rules`} component={AdminRules} />
            <Route path={`${url}/members`} component={AdminMembers} />
            <Route path={`${url}/home`} component={AdminHome} />
            <Route path={`${url}/news`} component={AdminNews} />
            <Route path={`${url}/complaints`}>
              <HandleComplaints />
            </Route>
          </AdminLayout>
        );
      }
      if (!user) {
        return <Redirect to={{ pathname: '/', state: { from: location } }} />;
      }
      return null;
    }}
  />
);
