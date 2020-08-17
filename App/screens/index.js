import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './Home';

const Tabs = createBottomTabNavigator();


export default function TabScreen() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="home" component={HomeStackScreen}/>
        </Tabs.Navigator>
    )
}
