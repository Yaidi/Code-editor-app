import React, { ReactElement } from 'react';

const Login = (): ReactElement => {
  return (
    <div>
      <div className="g-signin2" data-onsuccess="onSignIn" />
    </div>
  );
};
export default Login;
