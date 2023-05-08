import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MaterialIcons} from '@expo/vector-icons';

import Contacts from './screens/Contacts';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';
import User from './screens/User';
import Options from './screens/Options';

import colors from './utils/colors';
import { Modal } from 'react-native';

const getDrawerItemIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={22} style={{color: tintColor}} />
);

const getTabBarIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color: tintColor}} />
);

const ContactsScreen = createStackNavigator({
    Contacts,
    Profile,
},{
    initialRouteName: 'Contacts',
    navigationOptions:{
        //tabBarIcon: getTabBarIcon('list'),
        drawerIcon: getDrawerItemIcon('list'),
    },
},);
const FavoritesScreens = createStackNavigator({
    Favorites,
    Profile,
},{
    initialRouteName: 'Favorites',
    navigationOptions: {
        //tabBarIcon: getTabBarIcon('star'),
        drawerIcon: getDrawerItemIcon('star'),
    },
},);
const UserScreens = createStackNavigator({
    User,
    Options
},{
    mode: 'modal',
    initialRouteName: 'User',
    navigationOptions: {
        //tabBarIcon: getTabBarIcon('person'),
        drawerIcon: getDrawerItemIcon('person'),
    },
},);

const DrawerNavigator = createDrawerNavigator(
    {
        Contacts: ContactsScreen,
        Favorites: FavoritesScreens,
        User: UserScreens,
    },
    {
        initialRouteName: 'Contacts',
    },
);

const TabNavigator = createBottomTabNavigator({
    Contacts: ContactsScreen,
    Favorites: FavoritesScreens,
    User: UserScreens,
},{
    initialRouteName: 'Contacts',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            backgroundColor: colors.greyLight,
        },
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.greyDark,
    },
},);

//export default createAppContainer(TabNavigator);
export default createAppContainer(DrawerNavigator);