import { useDeferredValue, useEffect, useState } from "react";
import "../styles/login.css";
const url = "http://localhost:5000/api/login";
export default function Signup({ setUserSchema }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [det, setDet] = useState([]);
  const [userData, setUserData] = useState([]);
  const [docs, setDocs] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      method: "POST",
    });
    const data = await res.json();
    const details = {
      name: data[0],
      email: data[1],
      bio: data[2],
      image: data[3],
    };

  
    setDet(details);
    handle(data); // Call handle without arguments
  }

  function handle(data) {
    const userCredentials = {
      name: det.name,
      email: det.email,
      bio: det.bio,
      image: det.image,
    };

    if (data.message === "Invalid Email or Password") {
      localStorage.clear();
    } else if (data) {
      localStorage.setItem("userCredentials", JSON.stringify(data));
      window.location.href = "/mainaccount";
    }
    // Save data to localStorage
  }

  useEffect(() => {
    const storedData = localStorage.getItem("userCredentials");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

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
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
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
    </div>
  );
}
