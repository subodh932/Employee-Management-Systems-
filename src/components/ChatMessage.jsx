import React from "react";
import ChatbotIcon from "./ChatbotIcon";
const ChatMessage = ({ role, text }) => {
  console.log("ChatMessage Props: ", { role, text });

  return (
    <div
      className={`message ${role === "model" ? "bot" : "user"}-message ${
        ChatMessage.isError ? "error" : ""
      }`}
    >
      {role === "model" && <ChatbotIcon />}
      <p className="message-text">{text ? text : "No message available"}</p>
    </div>
  );
};

export default ChatMessage;