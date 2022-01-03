import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { useNavigate } from 'react-router-dom'

import './style.css'

import api from "../../services/api";

function Dashboard({ userInfo }) {
  const { token, setToken, setIsAuth } = useContext(UserContext);
  const navigate = useNavigate()

  async function handleLogout() {
    // const res = await api.logout(token);
    localStorage.setItem("token", null)
    setToken(null)
    setIsAuth(false)
    navigate('/login')
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Your token information is:</p>
      <section className="info">
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Account created in: {userInfo.createdAt}</p>
      </section>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
