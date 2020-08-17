import React from 'react';
import {View, Text} from 'react-native';
import FontIcons from "react-native-vector-icons/FontAwesome5";
import { ScreenContainer } from './screens';
import { createStackNavigator } from "@react-navigation/stack";




const AssetStack = createStackNavigator();


export const AssetStackScreen = ({navigation}) => (
    <AssetStack.Navigator>
      <AssetStack.Screen name="Assets" component={Assets}  options={() => ({ 
            headerLeft: () => (
              <FontIcons name="bars" style={{marginLeft: 25}} size={25} color="gray" onPress={() => navigation.toggleDrawer()}/>
            )
          })}/>
    </AssetStack.Navigator>
  );

const Assets = () => (
    <ScreenContainer>
        <Text>ASSETS SCREEN </Text>
    </ScreenContainer>
)
