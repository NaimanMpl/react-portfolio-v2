import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface ICursorContext {
  cursorVisible: boolean,
  setCursorVisible: Dispatch<SetStateAction<boolean>>
}

const CursorContext = createContext<ICursorContext | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  
  const [ cursorVisible, setCursorVisible ] = useState(false);
  
  return (
    <CursorContext.Provider value={{ cursorVisible, setCursorVisible }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a WorkCardDataProvider");
  }
  return context;
}