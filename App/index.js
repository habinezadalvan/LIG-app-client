import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import { DrawerScreens } from "./screens/DrawerScreens";
import { AuthStackScreens } from "./screens/AuthScreens";
import Spinner from "./components/Spinner";
import { AuthContext } from "./contexts/AuthContextProvider";
import { ThemeContext } from "./contexts/ThemeContextProvider";
import { getUserToken } from "./utils/tokenUtils";

const createApolloClient = (token) => {
  const link = new HttpLink({
    uri: "http://localhost:5050/graphql",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
};

const App = () => {
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { authState } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      const token = await getUserToken();
      const client = createApolloClient(token);
      setClient(client);

      if (token) {
        setIsLoggedIn(true);
      }
      return token;
    })();
  }, []);

  useEffect(() => {
    setIsLoggedIn(authState.isLoggedIn);
  }, [authState.isLoggedIn]);

  if (!client) {
    return <Spinner />;
  }
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {isLoggedIn ? <DrawerScreens /> : <AuthStackScreens />}
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
};

export default App;
