import React, { useState, useEffect, useMemo, useReducer } from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native-animatable";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { CreateAuthContext } from "./App/context";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';

import { DrawerScreens } from "./App/screens/DrawerScreens";
import { AuthStackScreens } from "./App/screens/AuthScreens";
import AsyncStorage from "@react-native-community/async-storage";
import Spinner from "./App/components/Spinner";


const createApolloClient = (token) => {
  const link = new HttpLink({
    uri: 'https://lig-app-api.herokuapp.com/graphql',
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache
  });

  return client;
}


export default () => {
  // user authentication

  const [client, setClient] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userToken: null,
    email: null,
    cleint: null
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIVE_TOKEN":
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
        };
      case "LOGIN":
        return {
          ...prevState,
          isLoading: false,
          userToken: action.token,
          email: action.email,
        };
      case "LOGOUT":
        return {
          ...prevState,
          isLoading: false,
          userToken: null,
          email: null,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => {
    return {
      login: async (foundUser) => {
        const userToken = foundUser[0].token;
        try {
          await AsyncStorage.setItem("userToken", userToken);
        } catch (err) {
          console.log("err", err);
        }

        dispatch({
          type: "LOGIN",
          email: foundUser[0].email,
          token: userToken,
        });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (err) {
          console.log("err", err);
        }
        dispatch({ type: "LOGOUT" });
      },

      changeTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        const client = createApolloClient(userToken);

        setClient(client);

      } catch (err) {
        console.log("err", err);
      }
      dispatch({ type: "RETRIVE_TOKEN", token: userToken });
    }, 2000);
  }, []);

  // Theme setting

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const customDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#eee",
      text: "#333",
      tagBg: '#e5e5e5',
      tagText: '#666'
    },
  };

  const customDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333",
      text: "#eee",
      tagBg: '#e5e5e5',
      tagText: '#666'
    },
  };

  const theme = isDarkTheme ? customDarkTheme : customDefaultTheme;

  if (!client) {
    return <Spinner/>
  }
  return (
    <ApolloProvider client={client} >
      <PaperProvider theme={theme}>
      <CreateAuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken ? <DrawerScreens /> : <AuthStackScreens />}
        </NavigationContainer>
      </CreateAuthContext.Provider>
    </PaperProvider>
    </ApolloProvider>
  );
};
