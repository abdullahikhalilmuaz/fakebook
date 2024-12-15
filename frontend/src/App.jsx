import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
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
      </Routes>
    </div>
  );
}
