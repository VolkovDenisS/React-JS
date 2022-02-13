import React, {useCallback} from "react";
import { FormMain } from "../Form/formMain";
import {MessageList} from "../Message/messageList";
import "../../App.css";
import {ChatList} from "./chatList";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { connect} from "react-redux";
import { addMessageWithReply} from "../../store/messages/actions";
import { push } from "firebase/database";
import { getChatMsgsListRefById } from "../../services/firebase";

function Chats({ msgs, sendMessage }) {
  const { chatId } = useParams();

  const handleSendMessage = useCallback(
    (newMessage) => {

      push(getChatMsgsListRefById(chatId), newMessage);
    },
    [chatId, sendMessage]
  );
  if (!msgs[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
      <div className="chat_form_container">
        <ChatList />
        <div className="chat_container">
          <MessageList messages={msgs[chatId]}/>
        </div>
        <FormMain onSendMessage={handleSendMessage}/>
      </div>
  );
}

export default Chats;

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  sendMessage: addMessageWithReply,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);