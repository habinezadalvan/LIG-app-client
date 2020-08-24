import React, { useState, createContext } from "react";
import { storeUserToken, removeUserToken } from "../utils/tokenUtils";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [authState, setAuthState] = useState({ isLoggedIn: false });

  const userLoggedIn = async (loggedIn, token) => {
    setAuthState({ isLoggedIn: loggedIn });
    if (loggedIn){
        storeUserToken(token);
    }else {
       removeUserToken();
    }
  };

  return (
    <AuthContext.Provider value={{ authState, userLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
