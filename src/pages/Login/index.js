import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";

import { UserContext } from "../../contexts/UserContext";

import "./style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(UserContext);

  async function handleLogin() {
    const data = {
      email,
      password,
    };

    const res = await api.login(data);

    setToken(res.data);
    localStorage.setItem("token", JSON.stringify(res.data));
  }

  return (
    <div className="login">
      <h1>Login</h1>

      <section className="input-wrapper">
        <div className="input-field">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input-field">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="link-wrapper">
          <Link className="link" to="/register">
            Go to register
          </Link>
        </div>

        <button onClick={handleLogin} type="button">
          Login
        </button>
      </section>
    </div>
  );
}

export default Login;
