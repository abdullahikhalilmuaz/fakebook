import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../styles/main-container.css";
import Profile from "../../components/Profile";
import Friends from "../../components/Friends";
import Home from "../../components/Home";
import Messages from "../../components/Messages";
import Feeds from "../../components/Feeds";
import Post from "../../components/Post";

export default function MainPage() {
  const [mainUser, setMainUser] = useState([]);
  const [search, setSearch] = useState("");
  const [mobile, setMobile] = useState(650);
  const [tablet, setTablet] = useState(770);
  const [desktop, setDesktop] = useState(990);
  const [showComponent, setShowComponent] = useState("");
  const [showOtherSide, setShowOtherSide] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userCredentials"));
    setMainUser(user);
  }, []);

  if (screen.width <= mobile) {
    console.log("mobile");
  } else if (screen.width >= desktop) {
    console.log("desktop");
  } else if (screen.width <= tablet) {
    console.log("tablet");
  }
  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        setShowComponent={setShowComponent}
        setShowOtherSide={setShowOtherSide}
        showOtherSide={showOtherSide}
      />
      <div className="main-container">
        <div className="side-one">
          {showComponent === "home" ? (
            <Home />
          ) : showComponent === "friends" && screen.width < mobile ? (
            <Friends />
          ) : showComponent === "message" && screen.width < mobile ? (
            <Messages />
          ) : showComponent === "post" ? (
            <Post />
          ) : showComponent === "feeds" ? (
            <Feeds />
          ) : (
            <Home />
          )}
        </div>
        <div className="side-two">
          {showOtherSide === "message" && screen.width >= desktop ? (
            <Messages />
          ) : showOtherSide === "friends" && screen.width >= desktop ? (
            <Friends />
          ) : (
            <Messages /> // Set Messages as default
          )}
        </div>
      </div>
    </div>
  );
}
