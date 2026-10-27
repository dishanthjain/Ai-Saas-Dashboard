import { createContext, useContext, ReactNode } from 'react';

// Simplified state management for initial setup
export const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};
