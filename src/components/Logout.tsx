import React, { ReactElement, useContext } from 'react';
import { Button } from '@material-ui/core';
import AuthContext from '../router/AuthContext';

const Logout = (): ReactElement => {
  const { setUser } = useContext(AuthContext);
  const signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => setUser(null));
  };
  return <Button onClick={signOut}>Log out</Button>;
};
export default Logout;
