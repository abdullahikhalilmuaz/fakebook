import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Notification from "./pages/Notification";
import Friends from "./pages/Friends";
import NewsFeeds from "./pages/NewsFeeds";
import styles from "./app.css";
import Home from "./pages/home/Home";
import Main from "./pages/home/Main";
import FriendsRequest from "./pages/FriendRequest";
import MainPage from "./pages/home/MainPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/main" element={<Main/>}></Route>
        <Route path="/mainpage" element={<MainPage/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/Friends" element={<Friends />}></Route>
        <Route path="/newsfeeds" element={<NewsFeeds />}></Route>
        <Route path="/friendsrequest" element={<FriendsRequest />}></Route>
      </Routes>
    </div>
  );
}
