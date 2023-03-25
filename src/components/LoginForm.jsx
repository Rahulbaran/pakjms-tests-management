import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <main className="login-form-container">
      <div className="login-form">
        <h1>आपका स्वागत है|</h1>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
          />
        </div>

        <Link to="/classes" className="btn btn-primary">
          Login
        </Link>
      </div>
    </main>
  );
}
