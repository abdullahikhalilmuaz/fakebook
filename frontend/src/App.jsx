import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Notification from "./pages/Notification";
import Friends from "./pages/Friends";
import NewsFeeds from "./pages/NewsFeeds";
import styles from "./app.css";
// import Home from "./pages/home/ "
// import Main from "./pages/home/Main";
import FriendsRequest from "./pages/FriendRequest";
import MainPage from "./pages/home/MainPage";
import MainAccount from "./pages/home/MainAccount";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/mainaccount" element={<MainAccount />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/mainaccount" element={<MainAccount />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/Friends" element={<Friends />}></Route>
        <Route path="/newsfeeds" element={<NewsFeeds />}></Route>
        <Route path="/friendsrequest" element={<FriendsRequest />}></Route>
      </Routes>
    </div>
  );
}
