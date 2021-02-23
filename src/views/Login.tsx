import React, { ReactElement, useState, useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import AuthContext from '../router/AuthContext';

const Login = (): ReactElement => {
  const [failure, setFailure] = useState('');
  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const authGoogle = (response: any): any | ReactElement => {
    history.push('/Editor');
    setUser(response);
  };
  const fail = () => {
    setFailure(`You couldn't Login, please try again`);
  };
  return (
    <div>
      <p>{failure}</p>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID as string}
        onSuccess={authGoogle}
        onFailure={fail}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};
export default Login;
