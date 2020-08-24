import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";




import {TabScreen} from '../TabsScreens';
import {ProfileStackScreen} from '../ProfileScreen';
import {EventStackScreen} from '../EventsScreen';
import {AssetStackScreen} from '../AssetsScreen';
import   DrawerContent from './DrawerContent';


const Drawer = createDrawerNavigator();


export const DrawerScreens = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} initialRouteName="Home" >
        <Drawer.Screen name="HomeDrawer" component={TabScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Events" component={EventStackScreen} />
        <Drawer.Screen name="Assets" component={AssetStackScreen} />
      </Drawer.Navigator>
)


