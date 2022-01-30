import {useDispatch} from "react-redux";
import {deleteMessage} from "../../store/messages/actions";
import {useParams} from "react-router";
import Moment from 'react-moment';
import styles from './MessageList.module.css';
import robot from '../img/robot.png';
import client from '../img/profile.png';
import {Button} from "react-bootstrap";

export const MessageList = ({messages}) => {
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const handleDeleteMessage = (e) => {
        dispatch(deleteMessage(chatId, e.target.id));
    };

    return messages.map(message => {
        if (message.author === "client") {
            return <div className={`${styles.container}`} key={message.id}>
                <Button className="delete_message_btn" variant="outline-danger" onClick={handleDeleteMessage} id={message.id}> X </Button>
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


