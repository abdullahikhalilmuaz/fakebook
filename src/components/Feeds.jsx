import { useState, useEffect } from "react";
import "../styles/feeds.css";

const postURL = "http://localhost:8000/posts/newPost";
const fetchPostsURL = "http://localhost:8000/posts/newPost"; // Endpoint to fetch posts

export default function Feeds() {
  const [showFeeds, setShowFeeds] = useState("");
  const [comment, setComment] = useState("");
  const [isNewPostVisible, setIsNewPostVisible] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [activeCommentPostId, setActiveCommentPostId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(fetchPostsURL);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleNewPost = () => setIsNewPostVisible((prev) => !prev);

  const handleNewPostSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("newUser"));
    if (!user) {
      alert("Please log in to create a post.");
      return;
    }
    try {
      const response = await fetch(postURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newPostContent, author: user.email }),
      });
      if (!response.ok) throw new Error("Failed to create post");
      alert("Post created successfully!");
      setNewPostContent("");
      setIsNewPostVisible(false);
      const updatedPosts = await fetch(fetchPostsURL).then((res) => res.json());
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  const handleLike = async (postId) => {
    const user = JSON.parse(localStorage.getItem("newUser"));
    if (!user) {
      alert("Please log in to like a post.");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8000/posts/${postId}/like`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.email }),
        }
      );
      if (!response.ok) throw new Error("Failed to like post");
      const updatedPosts = await fetch(fetchPostsURL).then((res) => res.json());
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error liking post:", error);
      alert("Failed to like post.");
    }
  };

  const handleCommentSubmit = async (postId) => {
    const user = JSON.parse(localStorage.getItem("newUser"));
    if (!user) {
      alert("Please log in to comment.");
      return;
    }
    if (!comment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:8000/posts/${postId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: comment, author: user.email }),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to add comment:", errorData);
        alert("Failed to add comment.");
        return;
      }
      setComment("");
      setActiveCommentPostId(null);
      alert("Comment added successfully!");
      const updatedPosts = await fetch(fetchPostsURL).then((res) => res.json());
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment.");
    }
  };

  return (
    <div className="feeds-wrapper">
      <div className="feeds-header">
        <span onClick={handleNewPost}>✏️Create a post</span>
        <span onClick={() => setShowFeeds("posts")}>posts</span>
        <span onClick={() => setShowFeeds("feeds")}>feeds</span>
      </div>

      <div className={`new-post ${isNewPostVisible ? "active" : ""}`}>
        <span style={{ fontSize: "15px", fontWeight: "bolder" }}>New Post</span>
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button onClick={handleNewPostSubmit}>Post</button>
      </div>

      {showFeeds === "posts" && (
        <div className="feeds-posts-container">
          <h3 className="feeds-title">Posts</h3>
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="post-header">
                <span>{post.author}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="post-text">{post.content}</div>
              <div className="post-user-reactions">
                <a href="#" onClick={() => handleLike(post.id)}>
                  like {post.likes ? post.likes.length : 0}
                </a>
                <a
                  href="#"
                  onClick={() =>
                    setActiveCommentPostId(
                      activeCommentPostId === post.id ? null : post.id
                    )
                  }
                >
                  comment {post.comments ? post.comments.length : 0}
                </a>
              </div>
              {activeCommentPostId === post.id && (
                <div className="comments-section">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button onClick={() => handleCommentSubmit(post.id)}>
                    Comment
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
