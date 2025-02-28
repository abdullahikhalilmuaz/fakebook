import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  const [home, setHome] = useState("");
  const [message, setMessages] = useState("");
  const [posts, setPosts] = useState("");
  const [feeds, setFeeds] = useState("");
  const [friends, setFriends] = useState("");
  const [profile, setProfile] = useState("");
  const [friendsRequest, setFriendRequest] = useState("");
  const [profileEditing, setProfileEditing] = useState("");
  const [userRegister, setUserRegister] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("newUser")) {
      setUserRegister(true);
    }
  }, []); // Runs only once when the component mounts

  return (
    <>
      <Header
        message={message}
        setMessages={setMessages}
        posts={posts}
        setPosts={setPosts}
        feeds={feeds}
        setFeeds={setFeeds}
        friends={friends}
        setFriends={setFriends}
        profile={profile}
        setProfile={setProfile}
        friendsRequest={friendsRequest}
        setFriendRequest={setFriendRequest}
        profileEditing={profileEditing}
        setProfileEditing={setProfileEditing}
        home={home}
        setHome={setHome}
        setUserRegister={setUserRegister}
        userRegister={userRegister}
        setUser={setUser}
        user={user}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                message={message}
                setMessages={setMessages}
                posts={posts}
                setPosts={setPosts}
                feeds={feeds}
                setFeeds={setFeeds}
                home={home}
                setHome={setHome}
                friends={friends}
                setFriends={setFriends}
                profile={profile}
                setProfile={setProfile}
                friendsRequest={friendsRequest}
                setFriendRequest={setFriendRequest}
                profileEditing={profileEditing}
                setProfileEditing={setProfileEditing}
                userRegister={userRegister}
                setUserRegister={setUserRegister}
                setUser={setUser}
                user={user}
              />
            }
          />
          <Route
            path="/home"
            element={<Home setUserRegister={setUserRegister} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
