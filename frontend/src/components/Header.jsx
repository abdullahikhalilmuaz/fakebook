import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
export default function Header({ setSearch, setShowComponent }) {
  function handleLogout() {
    const delUser = localStorage.removeItem("data");
    localStorage.clear();
    window.location.href = "/";
  }

  function handleMenu() {
    document.querySelector(".navs").classList.toggle("active");
  }

  function showNewsFeeds() {
    setShowComponent("newsfeeds");
  }

  function showPost() {
    setShowComponent("post");
  }

  function showMessages() {
    setShowComponent("message");
  }

  function showFriends() {
    setShowComponent("friends");
  }
  return (
    <div className="header">
      <div className="title">
        <h4>fakebook</h4>
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            className="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="navs">
        <ul>
          <li>
            <Link to="/mainaccount">Home</Link>
          </li>

          <li>
            <Link onClick={showFriends}>Friends</Link>
          </li>

          <li>
            <Link onClick={showMessages}>Message</Link>
          </li>

          <li>
            <Link onClick={showPost}>Posts</Link>
          </li>
          <li>
            <Link onClick={showNewsFeeds}>Feeds</Link>
          </li>
        </ul>
      </div>

      <div className="menu" onClick={handleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
