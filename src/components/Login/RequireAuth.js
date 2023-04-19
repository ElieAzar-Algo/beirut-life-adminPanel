import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const RequireAuth = ({children}) =>{
   
    const accessToken = localStorage.getItem("access-token")
    if(!accessToken){
        return <Navigate to='/'/>
    }
    return children
}