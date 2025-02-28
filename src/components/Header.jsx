import { Link } from "react-router-dom";
import "../styles/header.css";
import { useEffect, useState } from "react";
import { storeItemIdProperty } from "@syncfusion/ej2-react-documenteditor";
export default function Header({
  message,
  setMessages,
  posts,
  setPosts,
  feeds,
  setFeeds,
  setHome,
  home,
  friends,
  setFriends,
  profile,
  setProfile,
  friendsRequest,
  setFriendRequest,
  profileEditing,
  setProfileEditing,
  userRegister,
  setUserRegister,
  user,
  setUser,
}) {
  const store = JSON.parse(localStorage.getItem("newUser"));
  //navigation functions

  const handleLogout = () => {
    window.alert("Logout Successfuly!🤪🤪🤪");
    localStorage.clear();
    window.location.reload();
  };

  const handleMessages = () => {
    setMessages("messages");
    setFeeds("");
    setFriends("");
  };

  const handleFeeds = () => {
    setFeeds("feeds");
    setMessages("");
    setFriends("");
  };

  const handleFriends = () => {
    setFriends("friends");
    setMessages("");
    setFeeds("");
  };

  const handleHome = () => {
    setHome("home");
    setMessages("");
    setFeeds("");
    setFriends("");
  };

  const handleLoginButton = () => {
    setUser("login");
  };
  const handleSignupButton = () => {
    setUser("signup");
  };

  return (
    <div className="header">
      <div className="title-search">
        <h3>f</h3>
        {userRegister ? (
          <input type="search" placeholder="Search Facebook" />
        ) : (
          "fakebook"
        )}
      </div>

      {userRegister ? (
        <div className="profile">
          <div className="profile-image"></div>
          <div className="profile-name">
            {store.firstname + " " + store.username}
          </div>
        </div>
      ) : (
        ""
      )}

      {userRegister ? (
        <div className="nav">
          <span onClick={handleHome}>HOME</span>
          <span onClick={handleMessages}>MESSAGES</span>
          <span onClick={handleFeeds}>FEEDS</span>
          <span onClick={handleFriends}>FRIENDS</span>
        </div>
      ) : (
        ""
      )}
      {store ? (
        <button
          className="logout-button"
          style={{ width: "65px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <div className="action-button" style={{ display: "flex" }}>
          <button
            onClick={handleLoginButton}
            style={{
              background:" rgba(0, 60, 255, 0.808)",
              color: "white",
              border: "none",
            }}
          >
            Login
          </button>
          <button
            onClick={handleSignupButton}
            style={{
              backgroundColor:" rgba(0, 60, 255, 0.808)",
              color: "white",
              border: "none",
              marginLeft: "10px",
            }}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
}
