import React, { useState,useEffect, useRef } from "react";
import { connect } from "react-redux";

//import action
import { userMessage, sendMessage } from "../../actions/watson";


// userMessage - //  Function that handles  users message
const Chat = ({chat, userMessage,sendMessage }) => {
  //handle users message
  const [message, setMessage] = useState("");
  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chat]);

  //  Function that handles user submission
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }
  };
  return (
    <div className="chat">
      <h1>Chatty the Chatbot</h1>
      {/* Handle Messages */}
      <div className="historyContainer">
        {chat.length === 0
          ? ""
          : chat.map((msg,i) => <div className={msg.type} key={i}>{msg.message}</div>)}
        <div ref={endOfMessages}></div>
      </div>
      {/* Input Box */}
      <input
        id="chatBox"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
      ></input>
    </div>
  );
};

const mapStateToProps = (state) => ({
  chat: state.watson.messages, // access message queue in our chat component above
});

// bring state in
export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);

