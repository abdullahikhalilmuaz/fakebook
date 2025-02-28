import { useState, useEffect } from "react";
import "../styles/friendsrequest.css";

export default function Messaging({
  selectedUser,
  setSelectedUser,
  loggedInUserId,
}) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://fakebook-server.onrender.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (selectedUser && loggedInUserId) {
        try {
          const response = await fetch(
            `https://fakebook-server.onrender.com/messages/history/${loggedInUserId}/${selectedUser.id}`
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

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      try {
        const response = await fetch("https://fakebook-server.onrender.com/messages/send", {
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
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="friend-request">
      {!selectedUser ? (
        users.map((user) => (
          <div key={user.id} className="my-friends-wrapper">
            <div className="friends-details">
              <div
                className="friend-profile-image"
                style={{ backgroundColor: "gray" }}
              ></div>
              <div className="friend-profile-name">
                {user.firstname} {user.lastname}
              </div>
            </div>
            <div className="friends-action-buttons">
              <button onClick={() => handleSelectUser(user)}>Message</button>
            </div>
          </div>
        ))
      ) : (
        <div className="chat-container">
          <div className="chat-messages">
            {chatHistory.map((msg, index) => (
              <div key={index} className="message">
                <strong>
                  {msg.senderId === loggedInUserId
                    ? "You"
                    : selectedUser.username}{" "}
                  :{" "}
                </strong>
                {msg.text}
                <em>({msg.timestamp})</em>
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
