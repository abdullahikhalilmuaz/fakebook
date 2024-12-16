import { useEffect } from "react";
import "../styles/posts.css";
import { useState } from "react";
const url = "http://localhost:5000/api/post";
export default function Posts({ poster, setPoster }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const details = JSON.parse(localStorage.getItem("userCredentials"));
  const formData = {
    userName: details[0],
    postTitle: title,
    postContent: content,
  };

  console.log(formData);
  function handleForm(e) {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    window.alert("Form submitted successfuly!");
    setContent("");
    setTitle("");
    window.location.reload();
  }

  return (
    <div className={`form ${poster ? "active" : ""}`}>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="What's on your mind..."
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button>Post</button>
      </form>
    </div>
  );
}
