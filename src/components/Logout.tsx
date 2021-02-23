import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';

const Logout = (): ReactElement => {
  function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  return <Button onClick={signOut}>Log out</Button>;
};
export default Logout;
