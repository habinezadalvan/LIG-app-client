import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import FontIcons from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";
import { Details } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import MemberCard from "../components/MemberCard";
import { View } from "react-native-animatable";
import database from "../fakedb/db";
import { FlatList } from "react-native-gesture-handler";
import UserDetails from "./UserDetails";

const PeopleStack = createStackNavigator();

export const PeopleStackScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <PeopleStack.Navigator
      screenOptions={{
        headerTintColor: colors.text,
      }}
    >
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
        component={UserDetails}
        options={({ route }) => ({ title: route.params.name })}
      />
    </PeopleStack.Navigator>
  );
};

export const People = ({ navigation }) => {
  const { dark } = useTheme();

  const listOfMembersFlat = ({ item }) => (
    <MemberCard
      key={item.id}
      onPress={() => navigation.push("Details", { name: `${item.lastName} ${item.firstName}`, item })}
      position={item.position}
      firstname={item.firstName}
      lastname={item.lastName}
    />
  );

  return (
    <View>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <FlatList
        data={database}
        renderItem={listOfMembersFlat}
        keyExtractor={(item) => String(item.id)}
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
