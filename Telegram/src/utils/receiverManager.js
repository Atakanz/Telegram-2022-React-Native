import React from 'react';

export const ReceiverContext = React.createContext();
//  {UserContext} will be imported in all required files.
export const ReceiverProvider = ({children}) => {
  const [receiverArray, setReceiverArray] = React.useState([]);
  const [onlyContacts, setOnlyContacts] = React.useState([]);

  return (
    <ReceiverContext.Provider
      value={{
        receiverArray,
        setReceiverArray,
        onlyContacts,
        setOnlyContacts,
      }}>
      {/* It will wrap all the NavigationProvider */}
      {children}
    </ReceiverContext.Provider>
  );
};
