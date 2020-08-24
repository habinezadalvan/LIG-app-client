import {AsyncStorage} from 'react-native';
import jwtDecode from 'jwt-decode';



const CURRENT_USER = 'currentUser'

let currentUser;


export const getCurrentUser = async () => {

    if(currentUser){
        return Promise.resolve(currentUser);
    }
    currentUser = await AsyncStorage.getItem(CURRENT_USER);

    return currentUser;
};

export const storeCurrentUser = async (user) => {
    currentUser =  user;
    return AsyncStorage.setItem(CURRENT_USER, currentUser);
};

export const removeCurrentUser = async () => {
    currentUser= null;
    return await AsyncStorage.removeItem(CURRENT_USER);
    
}


export const validToken = (token) => {
    try{
        const decoded = jwtDecode(token, {complete: true});
        const currentTime = new Date().getTime();
        const tokenExpTime = decoded.exp;
        if(new Date(tokenExpTime).toLocaleTimeString() > new Date(currentTime).toLocaleTimeString()){
            return true;
        }else {
            return false;
        }
    }catch(err){
        console.log('err', err);
        return false;
    }
}