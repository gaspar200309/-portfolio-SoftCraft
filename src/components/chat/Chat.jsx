import React, { useState } from "react";
import useLLM from "usellm"
import { MdMessage } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { IoMdSend } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import Draggable from "react-draggable"; 
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const llm = useLLM({
    serviceUrl: 'https://usellm.org/api/llm'

  })

  const handleUserInput = async () => {
    if (input.trim() === "" || charCount > maxChars) {
      return;
    }

    const currentTime = new Date().toLocaleTimeString();
    
    const newChatHistory = [...chatHistory, { role: "user", content: input, time: currentTime }];

    try {
      const response = await llm.sendMessage(input); 
      if (response && response.text) {
        newChatHistory.push({ role: "user", content: response.text, time: currentTime });
      }

      setChatHistory(newChatHistory);
      setInput("");
      setCharCount(0); 
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo nuevamente.");
    }
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxChars) {
      setInput(inputText);
      setCharCount(inputText.length);
    }
  };

  const toggleChat = () => {
    setExpanded(!expanded);
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.classList.toggle("show");
  };

  return (
    <Draggable bounds="body" grid={[1, 1]} scale={1}>
      <div className={`chat-container ${expanded ? 'show' : ''}`}>
        <div className="chat-bubble" onClick={toggleChat}>
          {expanded ? (
            <CgClose className="chat-icon" />
          ) : (
            <MdMessage className="chat-icon" />
          )}
        </div>
        <div className="chat-header">
          <h2>Chat Bot</h2>
        </div>
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              {message.role === "user" ? (
                <>
                  <div className="message-content user-content">
                    <div>{message.content}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                  <FaRegUserCircle className="icon-user" />
                </>
              ) : (
                <>
                  <div className="message-content bot-content">
                    <div>{message.content}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                  <FaRobot className="icon-bot" />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="chat-input-wrapper">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe un mensaje..."
            className="chat-input"
          />
          <div className="char-counter">{charCount}/{maxChars}</div>
          <button onClick={handleUserInput} disabled={input.trim() === ""}>
            <IoMdSend />
          </button>
        </div>
      </div>
    </Draggable>
  );
}

export default Chat;