import React, {useCallback, useEffect} from "react";
import { FormMain } from "../Form/formMain";
import {MessageList} from "../MessageList/messageList";
import "../../App.css";
import {ChatList} from "./chatList";
import {useParams, Navigate} from "react-router-dom";
import { connect} from "react-redux";
import { addMessage } from "../../store/messages/actions";

function Chats({ messages, sendMessage}) {
  const { chatId } = useParams();

  const handleSendMessage = useCallback((newMessage) => {
      sendMessage(chatId, newMessage);
    },
    [chatId, sendMessage]
  );
  useEffect(()=>{
    if(messages[chatId]?.length && messages[chatId]?.[messages[chatId]?.length - 1].author!== 'robot'){
      const timeout = setTimeout(()=>
        handleSendMessage({
          author: 'robot',
          text: 'Сейчас все операторы заняты, попробуйте позже',
          id: ` RB${Date.now()}`
        }), 1000);
      return ()=> clearTimeout(timeout);
    }
  },[messages])


  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
      <div className="chat_form_container">
        <ChatList />
          <div className="chat_container">
            <MessageList messages={messages[chatId]}/>
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
  sendMessage: addMessage,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
