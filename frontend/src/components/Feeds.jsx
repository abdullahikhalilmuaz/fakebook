import { useState } from "react";
import "../styles/feeds.css";
import { useEffect } from "react";

export default function Feeds() {
  const [data, setData] = useState([]);
  const url = "http://localhost:5000/api/post";
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <div className="feeds">
      <div className="header">
        <h3>Feeds</h3>
      </div>

      {data.map((datas) => (
        <div className="unique-feed" key={datas.id}>
          <span>{datas.userName}</span>
          <h5>{datas.postTitle}</h5>

          <div className="feed-container">
            <p> {datas.postContent} </p>
          </div>

          <div className="feeds-action">
            <button>Like</button>
          </div>
        </div>
      ))}
    </div>
  );
}
