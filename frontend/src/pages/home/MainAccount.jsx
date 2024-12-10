import { useEffect, useState } from "react";
import Login from "../Login";
import MainPage from "./MainPage";
import Header from "../../components/Header";

export default function MainAccount() {
  return localStorage.getItem("userCredentials") ? <MainPage /> : <Login />;
}
