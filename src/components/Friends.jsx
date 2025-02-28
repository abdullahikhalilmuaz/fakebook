import { useState } from "react";
import "../styles/friends.css";
import FriendsRequest from "./FriendsRequest";

export default function Friends({ setSelectedUser }) {
  const [showFeeds, setShowFeeds] = useState("");

  const handleFriendsRequest = () => setShowFeeds("request");
  const handleFriends = () => setShowFeeds("friends");

  return (
    <div className="friends-wrapper">
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
        <span onClick={handleFriends}>Friends</span>
        <span onClick={handleFriendsRequest}>Request</span>
      </div>
      {showFeeds === "request" ? (
        <div className="friends-request">
          <FriendsRequest setSelectedUser={setSelectedUser} />
        </div>
      ) : showFeeds === "friends" ? (
        <div className="friends">
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Trebuchet MS",
              color: "rgb(65, 61, 61)",
            }}
          >
            Friends
          </h3>
        </div>
      ) : (
        <FriendsRequest setSelectedUser={setSelectedUser} />
      )}
    </div>
  );
}
