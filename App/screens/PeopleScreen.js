import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import FontIcons from "react-native-vector-icons/FontAwesome5";

import { Details } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenContainer } from "./screens";
import MemberCard from "../components/MemberCard";
import { View } from "react-native-animatable";

const PeopleStack = createStackNavigator();

export const PeopleStackScreen = ({ navigation }) => {
  return (
    <PeopleStack.Navigator>
      <PeopleStack.Screen
        name="People"
        component={People}
        options={() => ({
          title: "Members",
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
      <PeopleStack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({ title: route.params.name })}
      />
    </PeopleStack.Navigator>
  );
};

export const People = ({ navigation }) => {
  return (
    <View>
      <MemberCard
        onPress={() => navigation.push("Details", { name: "More info" })}
        position="Member"
        firstname="Emmanuel"
        lastname="Kanyengoga"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "black",
  },
});
