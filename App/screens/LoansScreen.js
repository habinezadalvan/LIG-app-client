import React from "react";
import { Text } from "react-native";
import FontIcons from "react-native-vector-icons/FontAwesome5";


import { ScreenContainer } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";

const LoanStack = createStackNavigator();

export const LoanStackScreen = ({ navigation }) => (
  <LoanStack.Navigator>
    <LoanStack.Screen
      name="Loans"
      component={Loans}
      options={() => ({
        headerLeft: () => (
          <FontIcons
            name="bars"
            style={{ marginLeft: 25 }}
            size={25}
            color="gray"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      })}
    />
  </LoanStack.Navigator>
);

const Loans = () => (
  <ScreenContainer>
    <Text>LOAN PAGE</Text>
  </ScreenContainer>
);
