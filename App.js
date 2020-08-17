import React, { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Splash,
} from "./App/screens/screens";
import { CreateAuthContext } from "./App/context";

import {DrawerScreens} from './App/screens/DrawerScreens';
import {AuthStackScreens} from './App/screens/AuthScreens';


export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      login: () => {
        setIsLoading(false);
        setUserToken("something");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <CreateAuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <DrawerScreens/>
        ) : (
          <AuthStackScreens/>
        )}
      </NavigationContainer>
    </CreateAuthContext.Provider>
  );
};
