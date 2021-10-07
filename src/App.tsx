import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    let [count,SetCount]=useState(0)
    return (
        <div className="App">
            Counter: {count}
            <button onClick={()=>SetCount(count+1)}>Click me!</button>
        </div>
    );
}

export default App;
