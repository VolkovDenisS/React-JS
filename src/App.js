import {useCallback, useEffect, useState} from "react";
import {Form} from "./components/";
import {MessageList} from "./components";
import "./App.css";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const initialMessages = [];
const chatList = [{name: 'chat1', id: 1}, {name: 'chat2', id: 2}, {name: 'chat3', id: 3}];

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
            <Box sx={{minWidth: 120, marginTop: 1}}>
                <FormControl fullWidth>
                    <InputLabel id="simple-select-label">Выбор чата</InputLabel>
                    <Select
                        labelId="simple-select-label"
                        id="chat-selector"
                        value='1'
                        label="Выбор чата">
                        {chatList.map((e) => {
                            return (<MenuItem value={e.id} key={e.id}>{e.name}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
            </Box>
            <div className="Form">
                <MessageList messages={messages}/>
            </div>
            <Form onSendMessage={handleSendMessage}/>
        </div>
    );
}

export default App;

