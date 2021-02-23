import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../views/Login';
import Editor from '../views/Editor';

const Router = (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/Editor" component={Editor} />
    </Switch>
  );
};
export default Router;
