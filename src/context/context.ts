import { createContext } from "react";
import { STATE_PROPS } from "./reducer";

export const INITIAL_STATE = {
  userDataState: undefined,
  setUserDataState: undefined,
};

export const AppContext = createContext<STATE_PROPS>(INITIAL_STATE);
