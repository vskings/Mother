import React, { useState } from 'react';

// const getInitialTheme = () => {
//   if (typeof window !== 'undefined' && window.localStorage) {
//     const storedPrefs = window.localStorage.getItem('color-theme');
//     if (typeof storedPrefs === 'string') {
//       return storedPrefs;
//     }

//     const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
//     if (userMedia.matches) {
//       return 'dark';
//     }
//   }

//   return 'light'; // light theme as the default;
// };

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState('dark');
  const [isOn, setIsOn] = useState(false);

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isLight = rawTheme === 'light';

    root.classList.remove(isLight ? 'dark' : 'light');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isOn, setIsOn }}>
      {children}
    </ThemeContext.Provider>
  );
};
