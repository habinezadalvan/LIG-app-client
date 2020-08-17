import React from 'react';
import {Text, Button} from 'react-native';
import {ScreenContainer} from './screens';


export const WelcomePage = ({navigation}) => {
    return (
      <ScreenContainer>
        <Text>Welcome to Luxary Investment Group</Text>
        <Button
          title="Login"
          onPress={() => navigation.push('Login')}
        ></Button>
      </ScreenContainer>
    );
  };