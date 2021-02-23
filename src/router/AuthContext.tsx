/* eslint-disable react/prop-types */
import React, { useState, useEffect, ReactElement, ReactChildren } from 'react';

const AuthContext = React.createContext<UserAuth | null>(null);
interface UserAuth {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}
export const AuthContextProvider: React.FC = ({ children }): ReactElement => {
  const [user, setUser] = useState<null | string>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
