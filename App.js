import React, { useState, useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  SignIn,
  WelcomePage,
  Home,
  Seacrh,
  Details,
  Profile,
  Splash,
} from "./App/screens/screens";
import SearchStackScreen from "./App/screens/SearchStackScreen";
import { CreateAuthContext } from "./App/context";
import Assets from "./App/screens/Assets";
import Loans from "./App/screens/Loans";
import Contributions from "./App/screens/Contributions";
import Savings from "./App/screens/Savings";
import Events from "./App/screens/Events";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontIcons from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ContributionStack = createStackNavigator();
const SavingStack = createStackNavigator();
const LoanStack = createStackNavigator();
const EventStack = createStackNavigator();
const AssetStack = createStackNavigator();

export const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={Home}
        options={() => ({
          title: "People",
          headerLeft: () => (
            <FontIcons
              name="bars"
              style={{ marginLeft: 20 }}
              size={20}
              color="gray"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({ title: route.params.name })}
      />
    </HomeStack.Navigator>
  );
};

export const ProfileScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile}  options={() => ({ 
          headerLeft: () => (
            <FontIcons name="bars" style={{marginLeft: 20}} size={20} color="gray" onPress={() => navigation.toggleDrawer()}/>
          )
        })}/>
    </ProfileStack.Navigator>
  );
};

export const ContributionStackScreen = ({navigation}) => (
  <ContributionStack.Navigator>
    <ContributionStack.Screen name="Contributions" component={Contributions}  options={() => ({ 
          headerLeft: () => (
            <FontIcons name="bars" style={{marginLeft: 20}} size={20} color="gray" onPress={() => navigation.toggleDrawer()}/>
          )
        })}/>
  </ContributionStack.Navigator>
);

export const SavingStackScreen = ({navigation}) => (
  <SavingStack.Navigator>
    <SavingStack.Screen name="Savings" component={Savings}  options={() => ({ 
          headerLeft: () => (
            <FontIcons name="bars" style={{marginLeft: 20}} size={20} color="gray" onPress={() => navigation.toggleDrawer()}/>
          )
        })}/>
  </SavingStack.Navigator>
);

export const LoanStackScreen = ({navigation}) => (
  <LoanStack.Navigator>
    <LoanStack.Screen name="Loans" component={Loans}  options={() => ({ 
          headerLeft: () => (
            <FontIcons name="bars" style={{marginLeft: 20}} size={20} color="gray" onPress={() => navigation.toggleDrawer()}/>
          )
        })}/>
  </LoanStack.Navigator>
);

export const EventStackScreen = ({navigation}) => (
  <EventStack.Navigator>
    <EventStack.Screen name="Events" component={Events}  options={() => ({ 
          headerLeft: () => (
            <FontIcons name="bars" style={{marginLeft: 20}} size={20} color="gray" onPress={() => navigation.toggleDrawer()}/>
          )
        })}/>
  </EventStack.Navigator>
);

export const AssetStackScreen = ({navigation}) => (
  <AssetStack.Navigator>
    <AssetStack.Screen name="Assets" component={Assets}  options={() => ({ 
          headerLeft: () => (
            <FontIcons name="bars" style={{marginLeft: 20}} size={20} color="gray" onPress={() => navigation.toggleDrawer()}/>
          )
        })}/>
  </AssetStack.Navigator>
);

const TabScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
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
          return <MaterialIcons name={iconName} size={size} color={color} />;
        } else if (route.name === "Search") {
          iconName = "md-search";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{}}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{ title: "People" }}
    />
    <Tabs.Screen name="Contributions" component={ContributionStackScreen} />
    <Tabs.Screen name="Savings" component={SavingStackScreen} />
    <Tabs.Screen name="Loans" component={LoanStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
  </Tabs.Navigator>
);

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
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Events" component={EventStackScreen} />
            <Drawer.Screen name="Assets" component={AssetStackScreen} />
          </Drawer.Navigator>
        ) : (
          <stack.Navigator initialRouteName="welcome">
            <stack.Screen
              name="welcome"
              component={WelcomePage}
              options={{ title: "" }}
            />
            <stack.Screen name="Login" component={SignIn} />
          </stack.Navigator>
        )}
      </NavigationContainer>
    </CreateAuthContext.Provider>
  );
};
