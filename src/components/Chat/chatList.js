import React from "react";
import { ChatItem } from "./chatItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

export const ChatList = () => {
  const [value, setValue] = useState("");
  const chatList = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = `chat${Date.now()}`;
    dispatch(addChat({ name: value, id: newId }));
    setValue("");
  };
  return (
    <div className="main-container" >
        <Dropdown className="d-inline mx-2" autoClose="inside">
            <Dropdown.Toggle id="dropdown-autoclose-inside">
                Выберите чат
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {chatList.map((chat) => (
                    <ChatItem chat={chat} key={chat.id}/>
                ))}
            </Dropdown.Menu>
        </Dropdown>

      <form onSubmit={handleSubmit} id="new_chat_form">

          <Form.Control as="textarea" rows={1} id="chat_list"
                        variant="standard"
                        value={value}
                        onChange={handleChange} required />

          <Button variant="primary" type="submit" id="new_chat_btn">Новый чат</Button>
      </form>

    </div>
  );
};
