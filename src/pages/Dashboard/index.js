import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import api from "../../services/api";

function Dashboard({ userInfo }) {
  const { token } = useContext(UserContext);

  async function handleLogout() {
    const res = await api.logout(token);
    console.log(res)
  }

  return (
    <div>
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
