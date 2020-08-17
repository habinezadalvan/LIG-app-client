import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Text} from 'react-native'
import {  ScreenContainer } from "./screens";

const SearchStack = createStackNavigator();

export const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="search" component={Search} />
  </SearchStack.Navigator>
);

const Search = ({ navigation }) => (
    <ScreenContainer>
        <Text>Search page</Text>
      </ScreenContainer>
)