import './App.css';
import {Message} from "./components";
import React from "react";

function App() {
  return (
    <div className="App">
        <Message
            header='Заголовок сообщения'
            content='Контент, который мы заслужили'/>
    </div>
  );
}

export default App;
