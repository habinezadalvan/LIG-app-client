import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { ScreenStack } from 'react-native-screens';
import { Search, Details, Search2 } from './screens';


const SearchStack = createStackNavigator();

export default function SearchStackScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="search" component = {Search}/>
            <SearchStack.Screen name="React native school"  component = {Details} options={({route}) => ({title: route.params.name})}/>
            <SearchStack.Screen name ="search 2 page" component={Search2}/>
        </SearchStack.Navigator>
    )
}
