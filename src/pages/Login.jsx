import { useState } from "react";
import "../styles/login.css";
const url = "https://fakebook-server.onrender.com/register/user/login";
export default function Login({ setSignup, setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    localStorage.clear();
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setData(data.message);
    if (data.user) {
      setData(data);
      localStorage.setItem("newUser", JSON.stringify(data.user));
      window.alert("Login successfully!");
      window.location.reload();
    }
  };
  return (
    <div className="login-container">
      <div className="login-left">
        <h3>fakebook</h3>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
          deleniti!
        </span>
      </div>
      <div className="login-right">
        <form onSubmit={handleLogin}>
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
            <button className="login-button" style={{ marginTop: "10px" }}>
              Login
            </button>
          </label>
          <div className="error">{data}</div>
        </form>
      </div>
    </div>
  );
}
