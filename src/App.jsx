import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Calculadora } from "./calculadora";
import AuthContext from "./state/AuthContext";
import NavBar from "./NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AuthContext>
        <NavBar />
        <Calculadora />
      </AuthContext>
    </div>
  );
}

export default App;
