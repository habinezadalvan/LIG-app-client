import React from 'react';
import {ScreenContainer} from '../screens/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, Button } from 'react-native';
import Login from './Login';


const WelcomeStack = createStackNavigator();

export const WelcomeScreen = () => {
    return(
        <WelcomeStack.Navigator>
            <WelcomeStack.Screen name="welcome" component={Welcome} />
            <WelcomeStack.Screen name="login page" component={Login} options= {{title: 'Login' }} />
        </WelcomeStack.Navigator>
    )
}

const  Welcome = ({navigation})  => (
    <ScreenContainer>
        <Text>Welcome page</Text>
        <Button title="Login" onPress={() => navigation.push('login page')}/>
    </ScreenContainer>
)
