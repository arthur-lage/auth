import React, { useState, useEffect, createContext } from "react";

import api from "../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return localStorage.setItem("token", null);
    } else {
      setToken(JSON.parse(localStorage.getItem("token")));
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      async function fetchData() {
        try {
          const res = await api.getInfo(token);

          setIsAuth(true);
          setUserInfo(res.data);
        } catch (e) {
          setToken(null);
          localStorage.setItem("token", null);
        }
      }

      fetchData();
    }

    if (token == null) {
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ token, setToken, userInfo, setUserInfo, isAuth, setIsAuth }}
    >
      {children}
    </UserContext.Provider>
  );
}
