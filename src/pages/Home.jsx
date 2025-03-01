import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Messages from "../components/Messages";
import Feeds from "../components/Feeds";
import Friends from "../components/Friends";
import "../styles/home.css";

export default function Home({
  message,
  setMessages,
  posts,
  setPosts,
  feeds,
  setFeeds,
  friends,
  setFriends,
  profile,
  setProfile,
  friendsRequest,
  setFriendRequest,
  profileEditing,
  setProfileEditing,
  home,
  setHome,
  userRegister,
  setUserRegister,
  user,
  setUser,
}) {
  localStorage.getItem("newUser")
    ? setUserRegister(true)
    : localStorage.clear();

  const [signup, setSignup] = useState("signup");
  const [login, setLogin] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="home">
      {userRegister ? (
        <div className="container">
          <div className="mobile">
            {message === "messages" ? (
              <Messages selectedUser={selectedUser} />
            ) : feeds === "feeds" ? (
              <Feeds />
            ) : friends === "friends" ? (
              <Friends setSelectedUser={setSelectedUser} />
            ) : home === "home" ? (
              <Feeds />
            ) : (
              <Feeds />
            )}
          </div>
          <div className="desktop">
            <Messages selectedUser={selectedUser} />
            <Feeds />
            <Friends setSelectedUser={setSelectedUser} />
          </div>
        </div>
      ) : user === "signup" ? (
        <Signup signup={signup} setSignup={setSignup} />
      ) : user === "login" ? (
        <Login signup={signup} setSignup={setSignup} />
      ) : (
        <Signup />
      )}
    </div>
  );
}
