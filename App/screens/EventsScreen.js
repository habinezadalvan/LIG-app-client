import React from "react";
import FontIcons from "react-native-vector-icons/FontAwesome5";

import { ScreenContainer } from "./screens";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const EventStack = createStackNavigator();

export const EventStackScreen = ({ navigation }) => (
  <EventStack.Navigator>
    <EventStack.Screen
      name="Events"
      component={Events}
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
  </EventStack.Navigator>
);

const Events = () => (
  <ScreenContainer>
    <Text>EVENTS SCREEN</Text>
  </ScreenContainer>
);
