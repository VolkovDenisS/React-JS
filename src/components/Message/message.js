import React from 'react';
import client from '../img/profile.png';
import {Button} from "react-bootstrap";
import Moment from 'react-moment';
import styles from './MessageList.module.css';
import {deleteMessage} from "../../store/messages/actions";

export const Message = ({message}) => {

  return (
      <div className={`${styles.container}`} key={message.id}>
          <img src={client} alt="Avatar"/>
          <p><span>{message.author}</span>: <span>{message.text}</span></p>
          <span className={styles.timeRight}><Moment unix>{Date.now()}</Moment></span>
      </div>
  );
};



