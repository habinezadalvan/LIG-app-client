import React, {useState, createContext} from 'react';
import {storeUserToken, removeUserToken} from '../utils/tokenUtils';


export const AuthContext = createContext();

export default function AuthContextProvider(props) {

    const [authState, setAuthState] = useState({isLoggedIn: false, userToken: null});

    const userLoggedIn = async (token) => {
        setAuthState({isLoggedIn: true});
        await storeUserToken(token);
    }
    const userSignOut = async () => {
        setAuthState({isLoggedIn: false});
        await removeUserToken();
    }
    return (
       <AuthContext.Provider value={{authState, userLoggedIn, userSignOut}}>
           {props.children}
       </AuthContext.Provider>
    )
}
