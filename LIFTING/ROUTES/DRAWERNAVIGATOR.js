import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HOME from '../SCREENS/HOME';
import ABOUT from '../SCREENS/ABOUT';
import DASHBOARD from './DASHBOARD';  // Import DASHBOARD for custom drawer content

const Drawer = createDrawerNavigator();

const DRAWERNAVIGATOR = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DASHBOARD {...props} />}  // Custom drawer content
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#055108',
          width: 240,
          alignItems: 'center',
          justifyContent: 'center',
        },
          drawerActiveTintColor: '#ffffff', // Color for active drawer item
          drawerInactiveTintColor: '#c6c6c6', // Color for inactive drawer item
          drawerLabelStyle: {
          fontFamily: 'ZillaSlab-Regular',
          fontSize: 15,
          color: '#ffffff', // Text color of drawer items
          width: 100,
          marginLeft: 67,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HOME} 
        options={{ headerShown: false }} 
      />
      <Drawer.Screen 
        name="About" 
        component={ABOUT} 
        options={{ headerShown: false }} 
      />
    </Drawer.Navigator>
  );
};

export default DRAWERNAVIGATOR;
