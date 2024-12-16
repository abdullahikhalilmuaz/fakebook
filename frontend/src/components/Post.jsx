import { useState } from "react";
import "../styles/post.css";
import Posts from "./Posts";
export default function Post() {
  const [poster, setPoster] = useState(false);
  function openPoster() {
    if (poster === false) {
      setPoster(true);
    } else if (poster === true) {
      setPoster(false);
    }
  }
  return (
    <div>
      <div className="posts">
        <h3>What's in your mind</h3>
        <div className="container">
          <button className="button" onClick={openPoster}>
            Add
          </button>
        </div>
      </div>
      <Posts poster={poster} setPoster={setPoster} />
    </div>
  );
}
