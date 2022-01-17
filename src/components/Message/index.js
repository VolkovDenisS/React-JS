import React from "react";
import styles from './Message.module.css';


export const Message = (props) => {
    return (
    <div className={styles.ui_message}>
        <div className="content">
            <div className={styles.header}>{props.header}</div>
            <p>{props.content}</p>
        </div>
    </div>
)
}

