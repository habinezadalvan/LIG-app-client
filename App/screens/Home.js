import React from 'react';
import { Home, Details } from './screens';

export const HomeStackScreen = () => {
    return(
        <HomeStack.Navigator>
          <HomeStack.Screen name="home" component={Home}/>
          <HomeStack.Screen name="Details" component={Details} options={({route}) => ({title: route.params.name})}/>
        </HomeStack.Navigator>
    )
  }
