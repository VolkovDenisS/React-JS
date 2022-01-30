import React, { useRef, useEffect, useState } from 'react';
import {Button} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export const FormMain = ({onSendMessage}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(
      {
        text: value,
        author: 'client',
        id: `CL${Date.now()}`
      }
    );
    setValue('');
  }
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form  onSubmit={handleSubmit} className="chat_form">
        <Form.Control as="textarea" rows={3} id="standard-basic"
                      variant="standard"
                      value={value}
                      onChange={handleChange}
                      required />
        <Button variant="primary" id="send_message_btn" type="submit">
        Отправить
      </Button>
    </form>
  )
}
