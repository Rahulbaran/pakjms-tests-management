import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: ""
  });

  const updateUsername = e => {
    setUserInfo(info => ({ ...info, username: e.target.value }));
  };

  const updatePassword = e => {
    setUserInfo(info => ({ ...info, password: e.target.value }));
  };

  const handleUserInfo = () => {
    async function userLogin() {
      const response = await fetch(
        `/.netlify/functions/login?username=${userInfo.username}&password=${userInfo.password}`
      );
      return await response.json();
    }

    userLogin()
      .then(res => localStorage.setItem("pakjms-login", res.login))
      .catch(() => localStorage.setItem("pakjms-login", false));
  };

  return (
    <main className="login-form-container">
      <div className="login-form">
        <h1>आपका स्वागत है| 🙏</h1>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter your username"
            value={userInfo.username}
            onChange={e => updateUsername(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
            value={userInfo.password}
            onChange={e => updatePassword(e)}
          />
        </div>

        <Link
          to="/classes"
          className="btn btn-primary login-btn"
          onClick={e => handleUserInfo(e)}
        >
          Login
        </Link>
      </div>
    </main>
  );
}
