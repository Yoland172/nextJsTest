import { UserData } from "@/api/types";
import { Dispatch, SetStateAction } from "react";

export type STATE_PROPS = {
  userDataState: any;
  setUserDataState: ((value: any) => void) | null
};

export const reducer = (
  state: STATE_PROPS,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "userDataState":
      return {
        ...state,
        userDataState: action.payload.userDataState,
      };
      case "userDataStateWithoutToken":
        return {
            ...state,
            userDataState: action.payload.userDataState
        }
    default:
      return state;
  }
};
