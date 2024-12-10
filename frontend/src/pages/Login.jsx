import { useEffect, useState } from "react";
// import Sign from "../components/Sign";
import "../styles/login.css";
const url = "http://localhost:5000/api/login";
export default function Signup({ setUserSchema }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [main, setMain] = useState();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    const details = {
      name: data[0],
      email: data[1],
      bio: data[2],
      image: data[3],
    };
    localStorage.setItem("data", JSON.stringify(details));
    const getDetails = JSON.parse(localStorage.getItem("data"));
    console.log(getDetails);
  }
  return (
    <div className="signup-container">
      <div className="left-signup">
        <div className="fake-text">
          <h3>fakebook</h3>
          <p>
            Fakebook helps you connect and share with the people in your life.
          </p>
        </div>
      </div>
      <div className="signup">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <input type="submit" value="Log In" />
          </label>
          <label>
            <a href="#" className="forgotten-password">
              Forgotten your password?
            </a>
          </label>
          <label>
            <a href="#" className="create-account-button">
              Create New Account
            </a>
          </label>
        </form>
      </div>
      {/* {console.log(main)} */}
    </div>
  );
}
