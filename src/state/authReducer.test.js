import { describe, expect, it } from "vitest";
import { authReducer } from "./authReducer";

describe('authReducer.js',()=>{
    it('should be a function',()=>{
        
        expect(typeof authReducer).toBe('function')
    })
    it('should changes the state to be logged in ',()=>{
        const state={isLoggedIn:false}
        const accion={type:'login'}
        const result=authReducer(state,accion)

        expect(result.isLoggedIn).toBeTruthy()
    })
    it('it should changes the state to logged out ',()=>{
        const state={isLoggedIn:true}
        const accion={type:'logout'}
        const result=authReducer(state,accion)

        expect(result.isLoggedIn).toBeFalsy()

    })
})