import logo from "./logo.svg";
import "./App.css";
import Linkedin from "./linkedin";
import { useState } from "react";

function App() {
  const superheros = require("superhero-name-library");
  // const names = ;
 const [names,setNames] = useState(superheros.allNames(10))
  const Heros = () => {
    return names.map((name,index) => 
    <div className={`${index%2 ?"red":"purple"}`}>
      <p>{name}</p>
    </div>);
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{
          const newNames = [superheros.random(),...names]
            // let len = names.length +1 ;
          //  let theData = superheros.allNames(len)
          setNames(newNames);
        }}>
          Add Element
        </button>
        <p>
          <Heros />
        </p>
        <Linkedin />
      </header>
    </div>
  );
}

export default App;
