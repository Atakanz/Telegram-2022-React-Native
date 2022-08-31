import React from 'react';

export const MessageContext = React.createContext();
//  {UserContext} will be imported in all required files.
export const MessageProvider = ({children}) => {
  // useState - start area
  const [message, setMessage] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState(' ');
  const messageDesigner = () => {
    return setNewMessage;
  };
  const messageSender = () => {
    if (newMessage !== ' ') {
      setMessage(oldArray => [...oldArray, newMessage]);
    } else {
      return;
    }
    setNewMessage(' ');
  };

  return (
    <MessageContext.Provider
      value={{
        message,
        messageSender,
        messageDesigner,
        newMessage,
      }}>
      {/* It will wrap all the NavigationProvider */}
      {children}
    </MessageContext.Provider>
  );
};
