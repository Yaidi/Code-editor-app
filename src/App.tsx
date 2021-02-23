import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Routes';
import { AuthContextProvider } from './router/AuthContext';

function App(): ReactElement {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
