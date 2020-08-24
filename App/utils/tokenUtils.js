import {AsyncStorage} from 'react-native';

const authToken = 'userToken';

let userToken;
export const getUserToken = async () => {
    if(userToken) {
       return Promise.resolve(userToken);
    };

    userToken = await AsyncStorage.getItem(authToken);
    return userToken;
};



export const storeUserToken = async (token) => {
    userToken = token;
    return AsyncStorage.setItem(authToken, userToken);
}

export const removeUserToken = async () => {
    userToken = null;
    return await AsyncStorage.removeItem(authToken);
}