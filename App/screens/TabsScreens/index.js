import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontIcons from "react-native-vector-icons/FontAwesome5";
import MaterialIcons5 from "react-native-vector-icons/MaterialCommunityIcons";
import {useTheme} from 'react-native-paper';

import {PeopleStackScreen} from '../PeopleScreen';
import {ContributionStackScreen} from '../ContributionsScreen';
import {SavingStackScreen} from '../SavingsScreen';
import {LoanStackScreen} from '../LoansScreen';
import {SearchStackScreen} from '../SearchStackScreen';



const Tabs = createBottomTabNavigator();


export const TabScreen = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#0793FD'
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "md-people";
          } else if (route.name === "Contributions") {
            iconName = "money-check";
            return <FontIcons name={iconName} size={20} color={color} />;
          } else if (route.name === "Savings") {
            iconName = "mobile";
            return <FontIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "Loans") {
            iconName = "credit-card-clock";
            return <MaterialIcons5 name={iconName} size={size} color={color} />;
          } else if (route.name === "Search") {
            iconName = "md-search";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="Home"
        component={PeopleStackScreen}
        options={{ title: "People" }}
      />
      <Tabs.Screen name="Contributions" component={ContributionStackScreen} />
      <Tabs.Screen name="Savings" component={SavingStackScreen} />
      <Tabs.Screen name="Loans" component={LoanStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  )
};