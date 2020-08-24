import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontIcons from "react-native-vector-icons/FontAwesome5";


import {ScreenContainer} from './screens';
import { AuthContext } from '../contexts/AuthContextProvider';


const ProfileStack = createStackNavigator();


export const ProfileStackScreen = ({navigation}) => {
    return (
      <ProfileStack.Navigator >
        <ProfileStack.Screen name="Profile" component={Profile}  options={() => ({ 
            headerLeft: () => (
              <FontIcons name="bars" style={{marginLeft: 25}} size={25} color="gray" onPress={() => navigation.toggleDrawer()}/>
            )
          })}/>
      </ProfileStack.Navigator>
    );
  };

  export const Profile = ({navigation}) => {
    const {userSignOut} = useContext(AuthContext);
    return(
        <ScreenContainer>
            <Text>Profile page</Text>
            <Button title="Sign out" onPress={() => userSignOut()}/>
        </ScreenContainer>
    )
}
