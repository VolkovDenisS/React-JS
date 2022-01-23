import React from 'react';
import Moment from 'react-moment';
import styles from './MessageList.module.css';
import robot from '../img/robot.png';
import client from '../img/profile.png';


export const MessageList = ({messages}) => {
    return messages.map(message => {
        if (message.author === "client") {
            return <div className={`${styles.container}`} key={message.id}>
                <img src={client} alt="Avatar"/>
                <p>{message.text}</p>
                <span className={styles.timeRight}><Moment unix>{Date.now()}</Moment></span>
            </div>
        } else {
            return <div className={`${styles.container} ${styles.darker}`} key={message.id}>
                <img src={robot} alt="Avatar" className={styles.right}/>
                <p>{message.text}</p>
                <span className={styles.timeLeft}><Moment unix>{Date.now()}</Moment></span>
            </div>
        }
    });
}