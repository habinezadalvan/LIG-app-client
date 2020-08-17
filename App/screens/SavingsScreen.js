import React from "react";
import { Text } from "react-native";
import FontIcons from "react-native-vector-icons/FontAwesome5";



import { ScreenContainer } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";

const SavingStack = createStackNavigator();

export const SavingStackScreen = ({ navigation }) => (
  <SavingStack.Navigator>
    <SavingStack.Screen
      name="Savings"
      component={Savings}
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
  </SavingStack.Navigator>
);

const Savings = () => (
  <ScreenContainer>
    <Text>SAVINGS PAGE MAN</Text>
  </ScreenContainer>
);
