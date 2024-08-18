import { UserData } from "@/lib/models";

export type STATE_PROPS = {
  userDataState?: UserData;
  setUserDataState?: (value: UserData) => void;
};

export enum ReducerActionTypes {
  UpdateUserData = "userDataState",
  UpdateUserDataStateWithoutToken = "userDataStateWithoutToken",
}

export type UserDataPayload = {
  userDataState?: UserData;
};

export const reducer = (
  state: STATE_PROPS,
  action: { type: string; payload: UserDataPayload }
) => {
  switch (action.type) {
    case ReducerActionTypes.UpdateUserData:
      return {
        ...state,
        userDataState: action.payload.userDataState,
      };
    case ReducerActionTypes.UpdateUserDataStateWithoutToken:
      return {
        ...state,
        userDataState: action.payload.userDataState,
      };
    default:
      return state;
  }
};
