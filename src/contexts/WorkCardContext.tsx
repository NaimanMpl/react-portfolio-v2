import React, { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface WorkCardContextType {
  currentWork: string,
  setCurrentWork: Dispatch<SetStateAction<string>>
}

const WorkCardContext = React.createContext<WorkCardContextType | undefined>(undefined);

export const WorkCardDataProvider = ({ children }: { children: ReactNode}) => {

  const [ currentWork, setCurrentWork ] = useState('Minecraft Clone');

  return (
    <WorkCardContext.Provider value={{ currentWork, setCurrentWork }}>
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