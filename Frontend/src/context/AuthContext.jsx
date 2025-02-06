import axios from "axios";
import {  createContext, useEffect, useState } from "react";



export const userAuth = createContext({
    user: [],
    login: () => {},
    logOut : () => {},
  
});



const AuthContext = ({children}) => {
    const [user, setUser] = useState('')

    const login = (user) =>{
           setUser(user)
    }

    useEffect(() =>{
      const varify = async () =>{
        try{
            const response = await axios.get("http://localhost:8080/api/auth/varify")
            if(response.data.success){
                setUser(response.data.user)
            }
        }catch(error){
            if(error.response && !error.response.data.success){
                
            }
        }
        }
        varify()
    },[])

    const logOut = () =>{
        setUser(null)
        localStorage.removeItem('token')
    }
    return(
          <userAuth.Provider value={{user, login, logOut}}>
            {children}
          </userAuth.Provider>
    )
} 
export default AuthContext;