import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../styles/main-container.css";
import { Link } from "react-router-dom";
import Posts from "../../components/Posts";
import NewsFeeds from "../NewsFeeds";
import Message from "../Message";
export default function MainPage() {
  const [mainUser, setMainUser] = useState([]);
  const [showComponent, setShowComponent] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userCredentials"));
    setMainUser(user);
  }, []);

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        setShowComponent={setShowComponent}
      />
      <div className="main-container">
        <div className="side-one">
          {showComponent === "newsfeeds" ? (
            <NewsFeeds />
          ) : showComponent === "posts" ? (
            <Posts />
          ) : (
            <div className="profile-bio">
              <div className="cover-photo"></div>
              <div className="bio-navs">
                <div className="profile-image">
                  <div className="image"></div>
                </div>
              </div>
              {console.log(mainUser)}
              <div className="bio">
                <div className="bio-desc">
                  <h3>{mainUser[0]}</h3>
                  <p>{mainUser[2]}</p>
                  <i>{mainUser[3]}</i>
                </div>
                <div className="bio-edit">
                  <button>+ Add to story</button>
                  <button>! edit profile</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="side-two">
          {showComponent === "message" ? (
            <Message />
          ) : showComponent === "friends" ? (
            <>
              <h4>Friends</h4>
              <div className="friend-index">
                <div className="profile-image-container">
                  <div className="img"></div>
                </div>
                <div className="profile-actions-container">
                  <div className="profile-details">
                    <h5>User name</h5>
                  </div>
                  <div className="actions">
                    <button>+ Add Friend</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h4>Friends</h4>
              <div className="friend-index">
                <div className="profile-image-container">
                  <div className="img"></div>
                </div>
                <div className="profile-actions-container">
                  <div className="profile-details">
                    <h5>User name</h5>
                  </div>
                  <div className="actions">
                    <button>+ Add Friend</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
