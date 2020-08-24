import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomePage } from "../WelcomeScreen";
import  SignIn from "../LoginScreen";

const Stack = createStackNavigator();

export const AuthStackScreens = () => (
  <Stack.Navigator initialRouteName="welcome" headerMode="none">
    <Stack.Screen name="welcome" component={WelcomePage}/>
    <Stack.Screen name="Login" component={SignIn} />
  </Stack.Navigator>
);
