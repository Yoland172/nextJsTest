"use client";

import { UserData } from "@/api/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AppContextI {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<any>("");

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [userDataState, setUserDataState] = useState<UserData | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        userDataState,
        setUserDataState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
