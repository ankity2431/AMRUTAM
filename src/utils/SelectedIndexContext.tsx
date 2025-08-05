import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';


type SelectedIndexContextType = {
  selectedIndex: number | null;
  setSelectedIndex: Dispatch<SetStateAction<number | null>>;
};


export const SelectedIndexContext = createContext<SelectedIndexContextType>({
  selectedIndex: 0,
  setSelectedIndex: () => {}, 
});


interface SelectedIndexProviderProps {
  children: ReactNode;
}


export const SelectedIndexProvider = ({ children }: SelectedIndexProviderProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <SelectedIndexContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      {children}
    </SelectedIndexContext.Provider>
  );
};
