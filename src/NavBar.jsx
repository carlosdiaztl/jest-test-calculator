import React, { useContext } from 'react'
import { Context } from './state/AuthContext'

const NavBar = () => {
    const {state,dispatch}=useContext(Context)
    const changeState=()=>{
        if (state.isLoggedIn) {
            const action={
                type:'logout'
            }
            dispatch(action)
            return

            
        }
        const action={
            type:'login'
        }
        dispatch(action)
        

    }
  return (
    <div onClick={changeState}>{state.isLoggedIn===false?"logIn":"logOut"}
    </div>
  )
}

export default NavBar