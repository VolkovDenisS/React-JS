import React, {useState} from 'react';
import styles from './Form.module.css';
import {Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const Form = ({onSendMessage}) => {
    const [value, setValue] = useState('');
    const [counter, setCounter] = useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
        onSendMessage(
            {
                id: `CL${counter}`,
                text: value,
                author: 'client'
            }
        );
        document.querySelector('textarea').focus();
        setValue('');
        e.target.reset();
    }


    return (
        <form onSubmit={handleSubmit} className={styles.decor}>
            <div className={styles.formInner}>
                <textarea placeholder="Сообщение..." rows="3" onChange={handleChange} className={styles.inputText}
                          required="Yes" autoFocus={true}/>
                <Button type="submit" variant="contained" endIcon={<SendIcon/>}>Отправить</Button>
            </div>
        </form>
    )
}
