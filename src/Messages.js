import React from "react";
import "./Messages.css";

function Messages(props) {
  const badge = props.unread ? (
    <div className="unread_count badge">{props.unread}</div>
  ) : null;
  return (
    <div className="messages">
      {props.name}
      {badge}
    </div>
  );
}

export default Messages;
