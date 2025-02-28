import { useEffect, useState } from "react";
import "../styles/chats.css";
import Messaging from "./Messaging";

export default function Chats({
  selectedUser,
  setSelectedUser,
  loggedInUserId,
}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser && loggedInUserId) {
        try {
          const response = await fetch(
            `http://localhost:8000/messages/history/${loggedInUserId}/${selectedUser.id}`
          );
          const data = await response.json();
          setMessages(data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };
    fetchMessages();
  }, [selectedUser, loggedInUserId]);

  return (
    <div className="chats-wrapper">
      {selectedUser ? (
        <>
          <h3>Chat with {selectedUser.username}</h3>
          <div className="chat-messages">
            {messages.map((msg, index) => (
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
          <Messaging
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            loggedInUserId={loggedInUserId}
          />
        </>
      ) : (
        <h3>Select a user to start chatting</h3>
      )}
    </div>
  );
}
