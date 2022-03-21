import { createContext, useState } from 'react';

const ThemeCtx = createContext();

const ThemeStore = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [closed, setClosed] = useState(false);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleClosed = () => setClosed(!closed);

  return (
    <ThemeCtx.Provider value={{ closed, toggleClosed, theme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export { ThemeStore, ThemeCtx };
