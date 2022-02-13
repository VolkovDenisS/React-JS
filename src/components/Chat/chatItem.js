import React from "react";
import {useDispatch} from "react-redux";
import {deleteChat} from "../../store/chats/actions";
import {Button} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import {LinkContainer} from "react-router-bootstrap";

export const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteChat(chat.id));
  };

  return (
      <div className="chat_list_items" key={chat.id}>
          <LinkContainer to={`/chats/${chat.id}`}>
              <Dropdown.Item href="#">{chat.name}</Dropdown.Item>
          </LinkContainer>
      </div>
  );
};

