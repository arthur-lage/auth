import React, { useState, useEffect, createContext } from "react"

import api from '../services/api'

export const UserContext = createContext()

export function UserProvider ({ children }) {
    const [token, setToken] = useState("")
    const [userInfo, setUserInfo] = useState({})
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(token) {
            async function fetchData () {
                const res = await api.getInfo(token)
                
                setIsAuth(true)
                setUserInfo(res.data)
            }
    
            fetchData()
        }
    }, [token])

    return (
        <UserContext.Provider value={{ token, setToken, userInfo, setUserInfo, isAuth, setIsAuth }}>
            {children}
        </UserContext.Provider>
    )
}