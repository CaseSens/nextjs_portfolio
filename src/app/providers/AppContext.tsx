'use client';

import React, { useState } from "react";

interface AppContextInterface {
  isInfoOpen: boolean;
  toggleInfoOpened: () => void;
}

export const AppContext = React.createContext<AppContextInterface | undefined>(undefined);

interface AppProviderInterface {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderInterface> = ({ children }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const toggleInfoOpened = () => {
    setIsInfoOpen(!isInfoOpen);
  }

  const value = { isInfoOpen, toggleInfoOpened };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}