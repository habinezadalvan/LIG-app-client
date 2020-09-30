import React from "react";
import { StyleSheet, StatusBar, Text} from "react-native";
import FontIcons from "react-native-vector-icons/FontAwesome5";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useQuery} from 'react-apollo';


import MemberCard from "../components/MemberCard";
import { View } from "react-native-animatable";
import database from "../fakedb/db";
import { FlatList } from "react-native-gesture-handler";
import UserDetails from "./UserDetails";
import {FETCH_ALL_USERS} from '../graphql/queries';
import Spinner from "../components/Spinner";
import CreateUser from "../components/CreateUser";

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
          headerRight: () => (
            <FontIcons
            name="user-plus"
            style={{ marginRight: 25 }}
            size={25}
            color="gray"
            onPress={() => navigation.navigate('Create user')}
          />
          )
        })}
      />
      <PeopleStack.Screen
        name="Details"
        component={UserDetails}
        options={({ route }) => ({ title: route.params.name })}
      />
      <PeopleStack.Screen name="Create user" component={CreateUser}/>
    </PeopleStack.Navigator>
  );
};

export const People = ({ navigation }) => {
  const {data, loading, error} = useQuery(FETCH_ALL_USERS);


  const { dark } = useTheme();


  if (loading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <Spinner/>
    </View>
    )
  };

  if (error) {
    return(
      <View>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <View style={{justifyContent: 'center', alignSelf: 'center', marginVertical: 50}}>
      <Text style={{textAlign: 'center'}} >{error.message.split(":")[1]}</Text>
       <Text style={{textAlign: 'center'}}>{error.message.split(":")[1] === ' Please login to proceed!!'? 'Session was expired!!' : ''}</Text>
      </View>
    </View>
    )
  };


  const listOfMembersFlat = ({ item }) => {
    return (
   
    <MemberCard
      key={item.id}
      onPress={() => navigation.push("Details", { name: `${item.lastName} ${item.firstName}`, item })}
      position={item.userPosition.name}
      firstname={item.firstName}
      lastname={item.lastName}
      item={item}
      accountStatus={item.accountStatus}
    />
  )};

  return (
    <View>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} />
      <FlatList
        data={data && data.users}
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
