import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function App(): JSX.Element {
    const [count, SetCount] = useState(0);
    return (
        <div className="App">
            <div className="popup">
                <Popup trigger={<button className="button">Welcome</button>} position="center center">
                    <div><h1>Welcome to website!!</h1></div>
                </Popup>
            </div>
            Counter: {count}
            <button onClick={()=>SetCount(count+1)}>Click me!</button>
            <button onClick={()=>SetCount(count-1)}>Minus me!</button>
        </div>
    );
}

export default App;
