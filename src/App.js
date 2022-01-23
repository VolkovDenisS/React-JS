import {useCallback, useEffect, useState} from "react";
import {Form} from "./components/";
import {MessageList} from "./components";
import "./App.css";

const initialMessages = [];

function App() {
    const [messages, setMessage] = useState(initialMessages);
    const handleSendMessage = useCallback((newMessage) => {
        setMessage(prevMessage => [...prevMessage, newMessage]);
    }, [])
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author !== 'robot') {
            setCounter(counter + 1);

            const timeout = setTimeout(() =>
                handleSendMessage({
                    id: `RB${counter}`,
                    author: 'robot',
                    text: 'Сейчас все операторы заняты, попробуйте позже'
                }), 1000);
            return () => clearTimeout(timeout);
        }
    }, [messages])
    return (
        <div className="App">
            <div className="Form">
                <MessageList messages={messages}/>
            </div>
            <Form onSendMessage={handleSendMessage}/>
        </div>
    );
}

export default App;
