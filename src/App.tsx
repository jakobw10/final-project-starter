import React from "react";
import "./App.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


function App(): JSX.Element {
    return (
        <div className="App">
            <Popup trigger={<button className="button">Trigger</button>} position="center center">
                <div><h1>Welcome to website!!</h1></div>
            </Popup>
        </div>
    );
}

export default App;
