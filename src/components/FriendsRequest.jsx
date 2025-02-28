import { useState, useEffect } from "react";
import "../styles/friendsrequest.css";

export default function FriendsRequest({ setSelectedUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");

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

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="friend-request">
      {users.map((user) => (
        <div key={user.id} className="my-friends-wrapper">
          <div className="friends-details">
            <div className="friend-profile-image"></div>
            <div className="friend-profile-name">
              {user.firstname} {user.lastname} ({user.username})
            </div>
          </div>
          <div className="friends-action-buttons">
            <button onClick={() => handleSelectUser(user)}>Message</button>
          </div>
        </div>
      ))}
    </div>
  );
}
