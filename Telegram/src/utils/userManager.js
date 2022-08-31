import React from 'react';

export const UserContext = React.createContext();
//  {UserContext} will be imported in all required files.
export const UserProvider = ({children}) => {
  // useState - start area
  const [user, setUser] = React.useState([]);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {/* It will wrap all the NavigationProvider */}
      {children}
    </UserContext.Provider>
  );
};
