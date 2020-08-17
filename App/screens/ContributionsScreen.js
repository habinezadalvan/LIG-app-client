import React from "react";
import { Text } from "react-native";
import FontIcons from "react-native-vector-icons/FontAwesome5";
import { ScreenContainer } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";

const ContributionStack = createStackNavigator();

export const ContributionStackScreen = ({ navigation }) => (
  <ContributionStack.Navigator>
    <ContributionStack.Screen
      name="Contributions"
      component={Contributions}
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
  </ContributionStack.Navigator>
);

const Contributions = () => (
  <ScreenContainer>
    <Text>CONTRIBUTIONS PAGE</Text>
  </ScreenContainer>
);
