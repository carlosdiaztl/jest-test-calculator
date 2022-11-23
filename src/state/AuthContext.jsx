import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer'
export const initialState={isLoggedIn:false}
export const Context=createContext(initialState)
const AuthContext = ({children}) => {
    const [state,dispatch]=useReducer(authReducer,initialState)
  return (

    <Context.Provider value={{state,dispatch}}> 
    {children}
    </Context.Provider>
  )
}

export default AuthContext