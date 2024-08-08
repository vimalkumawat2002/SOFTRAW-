import {View, Text, Settings} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import Profile from '../screen/Profile';
import Logout from '../screen/Logout';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';




const Tab = createBottomTabNavigator();


const Home = () => {
  return (
    <>
      

      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="home" size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <FIcon name="user" size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="Logout"
          component={Logout}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <Icon name="logout" size={30} />;
            },
          }}
        />
      </Tab.Navigator>

     
    </>
  );
};

export default Home;
