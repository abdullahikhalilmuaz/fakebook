import "../styles/posting.css";
import { useAsyncError, useResolvedPath } from "react-router-dom";

import { useState } from "react";
// post url endpoint

const url = "http://localhost:5000/api/post";
export default function Posts() {
  const [postContent, setPostContent] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [active, setActive] = useState(false);
  const formData = {
    postTitle: postTitle,
    postContent: postContent,
  };
  async function handlePost(e) {
    e.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    setPostContent("");
    setPostTitle("");
    window.alert("Posted!");
    window.location.reload();
  }
  return (
    <div className={`active ? `}>
      <h3>Posts</h3>

      <form onSubmit={handlePost}>
        <input
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder="Title"
        />
        <br />
        {/* <textarea

          type="text"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind"
        ></textarea> */}
        <textarea
          cols="20"
          rows="10"
          type="text"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind"
        ></textarea>
        <br />
        <button>post</button>
      </form>
    </div>
  );
}
