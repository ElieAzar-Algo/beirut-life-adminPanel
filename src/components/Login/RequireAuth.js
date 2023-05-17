import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) =>{
   
    const accessToken = localStorage.getItem("access-token")
    if(!accessToken){
        return <Navigate to='/'/>
    }
    return children
}