import { createContext, useContext, useState } from "react";
const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)

    const login = user =>{
        localStorage.setItem("access-token", user.token)
        setUser(user)
    }
    const logout = () =>{
        setUser(null)
    }

    return  <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () =>{
    return useContext(AuthContext)
}