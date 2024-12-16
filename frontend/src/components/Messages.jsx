import { useState } from "react";
import "../styles/Messages.css";
import { useEffect } from "react";
const url = "http://localhost:5000/api/message";
export default function Messages() {
  const [messageBody, setMessageBody] = useState("");
  const [data, setData] = useState([]);
  const details = JSON.parse(localStorage.getItem("userCredentials"));

  function handleMessages(e) {
    e.preventDefault();
    const formData = {
      userName: details[0],
      messageBody: messageBody,
    };

    fetch(url, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      method: "POST",
    })
      .then((res) => window.alert("Sent!"))
      .catch((err) => console.log(err));
    window.location.reload();
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="message">
        <div className="header">
          <div className="name">User Name</div>
        </div>
        <div className="bubbles-wrapper">
          {data.map((message) => (
            <div className="bubble-container">
              <span className="username">{message.userName}</span>
              <div className="bubble-text">{message.messageBody}</div>
              <div className="bubble-actions">
                <span>+</span>
                <span>o</span>
                <span>-</span>
              </div>
            </div>
          ))}
        </div>

        <div className="post-message">
          <form onSubmit={handleMessages}>
            <input
              type="text"
              placeholder="Enter your message..."
              onChange={(e) => setMessageBody(e.target.value)}
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
