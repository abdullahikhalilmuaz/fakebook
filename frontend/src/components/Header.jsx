import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
export default function Header({ setSearch }) {
  function handleLogout() {
    const delUser = localStorage.removeItem("data");
    localStorage.clear();
    window.location.href = "/";
  }

  function handleMenu() {
    document.querySelector(".navs").classList.toggle("active");
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
            <Link to="/friends">Friends</Link>
          </li>

          <li>
            <Link to="/message">Message</Link>
          </li>

          <li>
            <Link to="/feeds">Feeds</Link>
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
