import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import NavBar from "./NavBar";
import AuthContext from "./state/AuthContext";

describe('NavBar.jsx',()=>{
    afterEach(cleanup)
it('should render the component ',()=>{
    render(<AuthContext><NavBar/> </AuthContext>)

})
it('should have access to the context ',()=>{
    render(<AuthContext><NavBar/> </AuthContext>)
    screen.getByText('logIn')
})
it('should change from logIn to LoGout',()=>{
    render(<AuthContext><NavBar/> </AuthContext>)
   const logged= screen.getByText('logIn')
   fireEvent.click(logged)
   screen.getByText('logOut')
})
it('should change from logOut to Loggin',()=>{
    render(<AuthContext><NavBar/> </AuthContext>)
    const logged= screen.getByText('logIn')
    fireEvent.click(logged)
    const logOut=screen.getByText('logOut')
    fireEvent.click(logOut)
    screen.getByText('logIn')
    
})
})