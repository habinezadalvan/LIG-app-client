import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import {ScreenContainer} from './screens'
import {CreateAuthContext} from '../context';


export const SignIn = ({ navigation }) => {
    const {login} = useContext(CreateAuthContext);
  return (
    <ScreenContainer>
      <Text>Sign in</Text>
      <Button
        title="Sign in"
        onPress={() => login()}
      ></Button>
    </ScreenContainer>
  );
};