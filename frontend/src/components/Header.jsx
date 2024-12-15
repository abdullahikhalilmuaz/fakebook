import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
export default function Header({
  setSearch,
  setShowComponent,
  showOtherSide,
  setShowOtherSide,
}) {
  function handleLogout() {
    const delUser = localStorage.removeItem("data");
    localStorage.clear();
    window.location.href = "/";
  }

  function handleStuff(link) {
    if (link === "friends") {
      setShowOtherSide("friends");
      setShowComponent("friends");
    } else if (link === "message") {
      setShowOtherSide("message");
      setShowComponent("message");
    } else if (link === "home") {
      setShowComponent("home");
    } else if (link === "post") {
      setShowComponent("post");
    } else if (link === "feeds") {
      setShowComponent("feeds");
    }
  }

  function handleMenu() {
    document.querySelector(".navs").classList.toggle("active");
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
            <Link onClick={() => handleStuff("home")}>Home</Link>
          </li>

          <li>
            <Link onClick={() => handleStuff("friends")}>Friends</Link>
          </li>
          <li>
            <Link onClick={() => handleStuff("message")}>Message</Link>
          </li>

          <li>
            <Link onClick={() => handleStuff("post")}>Posts</Link>
          </li>
          <li>
            <Link onClick={() => handleStuff("feeds")}>Feeds</Link>
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
