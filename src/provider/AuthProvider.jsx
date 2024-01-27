import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import userPhoto from "./../assets/user.jpeg";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);
const cookies = new Cookies();
const token = cookies.get("jwt")


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // getting user info after reload/refresh from cookie
  useEffect(()=>{
    if(token){
      const {number, company, name} = jwtDecode(token);       
      setUser({
      name,
      company,
      phone:number,
      image:userPhoto
    })}
  },[token])
 
  // register
  const register = (phone, pass, passedToken) => {
    const {number, password, company, name} = jwtDecode(passedToken);
    // authenticate
    if(number === phone & password === pass){
      setUser({
        name,
        company,
        number,
        image:userPhoto
      });
      //set cookie 
      cookies.set("jwt", passedToken)
      return true;
    }
    return false
  };
 
  // login
  const login = (phone, pass, passedToken) => {
    const {number, password, company, name} = jwtDecode(passedToken);
    // authenticate
    if(number === phone & password === pass){
      setUser({
        name,
        company,
        number,
        image:userPhoto
      });
      //set cookie 
      cookies.set("jwt", passedToken)
      return true;
    }
    return false
  };

  // logout
  const logout = () => {
    // Clear user and token on logout
    setUser(null);
    cookies.remove("jwt");
  };
  const authInfo = { user, token, register, login, logout };
  console.log("current User -->", user )
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
