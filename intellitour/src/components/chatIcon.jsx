import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/chatIcon.css";


const ChatIcon = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-icon" onClick={() => navigate("/assistant")}>
      💬
    </div>
  );
};

export default ChatIcon;
