import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export function AppContext({ children }) {
  const [search, setSearch] = useState('cat');

  return (
    <GlobalContext.Provider value={{ search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
