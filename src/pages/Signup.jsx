import { useState, useEffect } from "react";
import "../styles/signup.css";
import { data } from "react-router-dom";
export default function Signup({ setSignup }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8000/register/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstname, lastname, username, email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };
  return (
    <div className="signup-container">
      <div className="left">
        <h3>fakebook</h3>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          deleniti!
        </span>
      </div>
      <div className="right">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Firstname"
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Lastname"
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="confirm passsword"
                onChange={(e) => setComfirmPassword(e.target.value)}
                required
              />
            </label>
            <label>
              <button className="signup-button">Signup</button>
            </label>
            <div className="error">{message}</div>
          </form>
        </div>
      </div>
    </div>
  );
}
