import React from 'react';

export const ThemeContext = React.createContext();
// tüm gerekli dosyalarda {ThemeContext} olarak import edilecek
export const ThemeProvider = ({children}) => {
  //   useState - start area
  const [theme, setTheme] = React.useState('Light');
  const toggleTheme = () => {
    if (theme === 'Light') {
      setTheme('Dark');
    } else {
      setTheme('Light');
    }
    //   useState - end area
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {/* app.js içinde stack ve tabnav'ı dışarıdan saracak */}
      {children}
    </ThemeContext.Provider>
  );
};
