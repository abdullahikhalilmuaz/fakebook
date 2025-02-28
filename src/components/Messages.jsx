import { useState, useEffect } from "react";
import "../styles/message.css";
import Chats from "./Chats";
import Messaging from "./Messaging";

export default function Messages({
  selectedUser,
  loggedInUserId,
  setLoggedInUserId,
}) {
  const [handleThisMessages, setHandleThisMessages] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (selectedUser && loggedInUserId) {
        try {
          const response = await fetch(
            `http://localhost:8000/messages/history/${loggedInUserId}/${selectedUser.id}`
          );
          const data = await response.json();
          setChatHistory(data);
        } catch (error) {
          console.error("Error fetching chat history:", error);
        }
      }
    };
    fetchChatHistory();
  }, [selectedUser, loggedInUserId]);

  const handleMessages = () => setHandleThisMessages("chats");
  const handleMessageChats = () => setHandleThisMessages("messages");

  // Handle sending a message
  const handleSendMessage = async () => {
    if (message.trim()) {
      try {
        const response = await fetch("http://localhost:8000/messages/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: loggedInUserId,
            receiverId: selectedUser.id,
            text: message,
          }),
        });
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
        const newMessage = await response.json();
        setChatHistory([...chatHistory, newMessage]);
        console.log(chatHistory);
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="message-wrapper">
      <div
        className="feeds-header"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "35px",
          backgroundColor: "rgb(231, 228, 228)",
          alignItems: "center",
        }}
      >
        <span onClick={handleMessageChats}>Messages</span>
        <span onClick={handleMessages}>Chats</span>
      </div>
      {handleThisMessages === "messages" ? (
        <div className="messages-message-container">
          <Messaging />
        </div>
      ) : handleThisMessages === "chats" ? (
        <div className="messages-chat-container">
          {chatHistory.map((message, index) => (
            <div key={index} className="message">
              <strong>
                {message.senderId === loggedInUserId
                  ? "You"
                  : selectedUser.username}{" "}
                :{" "}
              </strong>
              {message.text}
              <em>({message.timestamp})</em>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="messages-chat-container"
          style={{ width: "100%", height: "100%" }}
        >
          <Messaging />
        </div>
      )}
      {/* Chat Input */}
      {selectedUser && (
        <div className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}
