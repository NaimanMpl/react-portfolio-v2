import React, { ReactNode, useContext } from "react";

export interface WorkCardData {
  x: number,
  y: number
}

export interface Works {
  minecraftclone: WorkCardData
  evyl: WorkCardData
}

const WorkCardContext = React.createContext<Works>({
  minecraftclone: {
    x: 0,
    y: 0
  },
  evyl: {
    x: 0,
    y: 0
  }
});

export const WorkCardDataProvider = ({ children }: { children: ReactNode}) => {
  return (
    <WorkCardContext.Provider value={{ minecraftclone: {x: 0, y: 0}, evyl: {x: 0, y: 0} }}>
      {children}
    </WorkCardContext.Provider>
  ) 
}

export const useWorkCardData = () => {
  return useContext(WorkCardContext);
}