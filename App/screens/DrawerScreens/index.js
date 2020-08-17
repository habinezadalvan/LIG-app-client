import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons5 from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




import {TabScreen} from '../TabsScreens';
import {ProfileStackScreen} from '../ProfileScreen';
import {EventStackScreen} from '../EventsScreen';
import {AssetStackScreen} from '../AssetsScreen';
import{DrawerContent} from './DrawerContent';


const Drawer = createDrawerNavigator();


export const DrawerScreens = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} initialRouteName="Home" >
        <Drawer.Screen name="HomeDrawer" component={TabScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Events" component={EventStackScreen} />
        <Drawer.Screen name="Assets" component={AssetStackScreen} />
      </Drawer.Navigator>
)


// screenOptions={({route}) => ({
//     drawerIcon: ({size, color}) => {
//         let iconName;
//         if(route.name === 'Home'){
//           iconName = 'md-home'
//         } else if(route.name === 'Profile'){
//           iconName='md-person';
//         }else if(route.name === 'Events') {
//           iconName="schedule";
//           return <MaterialIcons name={iconName} size={size} color={color}/>
//         }else if(route.name === 'Assets') {
//           iconName="finance";
//           return <MaterialIcons5 name={iconName} size={size} color={color}/>
//         }

//         return <Ionicons name={iconName} size={size} color={color}/>
//       }
//   })}
