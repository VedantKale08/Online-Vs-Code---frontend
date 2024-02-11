"use client";

import { createContext, useContext, useState } from "react";

export type NameContextType = {
  name: string;
  setName: (data: string) => void;
  id: string;
  setId: (data: string) => void;
};

const NameContext = createContext<NameContextType | null>(null);

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  return (
    <NameContext.Provider value={{ name, setName, id, setId }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const nameValue = useContext(NameContext);
  if (!nameValue) {
    throw new Error("Invalid");
  }
  return nameValue;
};
