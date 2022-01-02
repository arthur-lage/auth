import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
              element={isAuth ? <Dashboard userInfo={userInfo} /> : <Register />}
            />
            <Route path="/" element={isAuth ? <Dashboard userInfo={userInfo} /> : <Login />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
