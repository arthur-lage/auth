import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";

import { UserContext } from '../../contexts/UserContext'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(UserContext)

  async function handleRegister() {
    const data = {
      name,
      email,
      password,
    };

    const res = await api.register(data)
      setToken(res.data)
  }

  return (
    <div>
      <h1>Register</h1>

      <section className="input-wrapper">
        <div className="input-field">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>
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
      </section>

      <Link to="/">Go to login</Link>

      <button onClick={handleRegister} type="button">
        Register
      </button>
    </div>
  );
}

export default Register;
