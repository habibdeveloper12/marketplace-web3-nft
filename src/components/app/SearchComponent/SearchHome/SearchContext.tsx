import React, { createContext, useState } from 'react';

export const SearchContext = createContext<any>(null);

export const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState('Marketplace');
  return (
    <SearchContext.Provider
      value={{
        category,
        setCategory
      }}>
      {children}
    </SearchContext.Provider>
  );
};
