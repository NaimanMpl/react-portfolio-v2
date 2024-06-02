import React, { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface WorkCardContextType {
  currentWorkIndex: number,
  setCurrentWorkIndex: Dispatch<SetStateAction<number>>
}

const WorkCardContext = React.createContext<WorkCardContextType | undefined>(undefined);

export const WorkCardDataProvider = ({ children }: { children: ReactNode}) => {

  const [ currentWorkIndex, setCurrentWorkIndex ] = useState(0);

  return (
    <WorkCardContext.Provider value={{ currentWorkIndex, setCurrentWorkIndex }}>
      {children}
    </WorkCardContext.Provider>
  ) 
}

export const useWorkCardData = (): WorkCardContextType => {
  const context = useContext(WorkCardContext);
  if (context === undefined) {
    throw new Error("useWorkCardData must be used within a WorkCardDataProvider");
  }
  return context;
};