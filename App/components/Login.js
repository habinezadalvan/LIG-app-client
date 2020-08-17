import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ScreenContainer } from '../screens/screens';
import { Text, Button } from 'react-native';
import { HomeStackScreen } from '../../App';
import TabScreen from '../screens';


const LoginStack = createStackNavigator();



export const LoginScreen = () => {
    return(
        <LoginStack.Navigator>
            <LoginStack.Screen name="login" component={Login}/>
            <LoginStack.Screen name="home" component={TabScreen}/>
        </LoginStack.Navigator>
    )

}

export default function Login({navigation}) {
    return (
       <ScreenContainer>
           <Text>Login page</Text>
           <Button title="Login" onPress={() => navigation.push('home')}/>
       </ScreenContainer>
    )
}
