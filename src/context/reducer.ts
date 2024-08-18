import { UserData } from "@/lib/models";

export type STATE_PROPS = {
  userDataState?: UserData;
  setUserDataState?: ((value: UserData) => void);
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
