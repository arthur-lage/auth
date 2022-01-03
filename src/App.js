import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import './global.css'

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { UserContext } from "./contexts/UserContext";

function App() {
  const { userInfo, isAuth } = useContext(UserContext)

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/register"
              element={isAuth ? <Navigate replace to="/" /> : <Register />}
            />
            <Route path="/login" element={isAuth ? <Navigate replace to="/" /> : <Login />} />
            <Route path="/" element={isAuth ? <Dashboard userInfo={userInfo} /> : <Navigate replace to="/login" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
