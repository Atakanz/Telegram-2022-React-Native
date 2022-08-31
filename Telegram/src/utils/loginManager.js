import React from 'react';

export const LoginContext = React.createContext();

export const LoginProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </LoginContext.Provider>
  );
};
