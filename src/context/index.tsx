"use client";

import {
  useContext,
  useReducer,
  useEffect
} from "react";
import { reducer } from "./reducer";
import { AppContext, INITIAL_STATE } from "./context";
import { getUserDataFromStorage } from "@/lib/helpers/authHelper";


export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setUserDataState = (value: any) => {
    dispatch({
      type: "userDataState",
      payload: {
        userDataState: value
      }
    })
  }

  const fetchUserData = () => {
      const data = getUserDataFromStorage() 

    setUserDataState(data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        setUserDataState
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
