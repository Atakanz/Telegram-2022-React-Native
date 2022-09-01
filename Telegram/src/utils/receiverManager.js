import React from 'react';

export const ReceiverContext = React.createContext();
// tüm gerekli dosyalarda {ThemeContext} olarak import edilecek
export const ReceiverProvider = ({children}) => {
  //   useState - start area
  const [receiver, setReceiver] = React.useState([]);

  return (
    <ReceiverContext.Provider value={{receiver, setReceiver}}>
      {/* app.js içinde stack ve tabnav'ı dışarıdan saracak */}
      {children}
    </ReceiverContext.Provider>
  );
};
