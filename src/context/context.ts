import { createContext } from 'react'
import { STATE_PROPS } from './reducer';


export const INITIAL_STATE = {
    userDataState: null,
    setUserDataState: null
  }
  

export const AppContext = createContext<STATE_PROPS>(INITIAL_STATE);