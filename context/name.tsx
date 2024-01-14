"use client";

import { createContext, useContext, useState } from "react";

export type NameContextType = {
  name: string;
  setName: (data: string) => void;
};

const NameContext = createContext<NameContextType | null>(null);

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string>("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
    const nameValue = useContext(NameContext);
    if(!nameValue){
        throw new Error("Invalid")
    }
    return nameValue;
}
