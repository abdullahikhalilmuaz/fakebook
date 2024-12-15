import { useState } from "react";
import "../styles/posts.css";
import Posting from "./../pages/Posting";
export default function Posts() {
  const [open, setOpen] = useState(true);
  function handleOpen() {
    setOpen(false);
  }
  return (
    <div className="posts">
      <Posting setOpen={setOpen} open={open} />
      <div className="container">
        <button className="button" onClick={handleOpen}>
          Add
        </button>
      </div>
    </div>
  );
}
