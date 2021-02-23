/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthContext from './AuthContext';

type PrivateRouteProps = RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user, 'private route');
    return () => console.log('pablo clavo clavito');
  }, [user]);

  return user ? <Route {...rest} /> : <Redirect to="/" />;
};

export default PrivateRoute;
