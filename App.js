import React, { useState, useEffect, useMemo, useReducer } from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import { CreateAuthContext } from "./App/context";

import { DrawerScreens } from "./App/screens/DrawerScreens";
import { AuthStackScreens } from "./App/screens/AuthScreens";
import AsyncStorage from "@react-native-community/async-storage";

export default () => {

  // user authentication

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    email: null
  }
  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        }
        case 'LOGIN':
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
          email: action.email
        }
        case 'LOGOUT':
        return {
          ...prevState,
          isLoading: false,
          userToken: null,
          email: null
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => {
    return {
      login: async (foundUser) => {
      
        const userToken = foundUser[0].token;
          try{
            await AsyncStorage.setItem('userToken', userToken);
          } catch(err){
            console.log('err', err);
          }
        
        dispatch({type: 'LOGIN', email: foundUser[0].email, token: userToken})
      },
      signOut: async () => {
        try{
          await AsyncStorage.removeItem('userToken');
        }catch(err){
          console.log('err', err);
        }
        dispatch({type: 'LOGOUT'});
      },
    };
  }, []);



  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try{
        userToken= await AsyncStorage.getItem('userToken');
      }catch(err){
        console.log('err', err);
      }
      dispatch({type: 'RETRIVE_TOKEN', token: userToken})
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0793FD" />
      </View>
    );
  }
  return (
    <CreateAuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken ? <DrawerScreens /> : <AuthStackScreens />}
      </NavigationContainer>
    </CreateAuthContext.Provider>
  );
};

