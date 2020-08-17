import React from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import FontIcons from "react-native-vector-icons/FontAwesome5";


import { Details } from './screens';
import { createStackNavigator } from "@react-navigation/stack";
import {ScreenContainer} from './screens';

const PeopleStack = createStackNavigator();


  export const PeopleStackScreen = ({ navigation }) => {
    return (
      <PeopleStack.Navigator >
        <PeopleStack.Screen
          name="People"
          component={People}
          options={() => ({
            title: "People",
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
      <ScreenContainer>
        <Text>Welcome to our App</Text>
        <Button
          style={styles.button}
          title="React native by example"
          onPress={() =>
            navigation.push("Details", { name: "React native by example" })
          }
        />
        <Button
          style={styles.button}
          title="React native school"
          onPress={() =>
            navigation.push("Details", { name: "React native school" })
          }
        />
  
      </ScreenContainer>
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