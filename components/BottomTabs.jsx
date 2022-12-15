import { View, Text } from 'react-native'
import React from 'react';

import Home from '../screens/Home';
import Products from '../screens/Products';
import User from '../screens/User';
import Cart from '../screens/Cart';
import { Tab } from '@rneui/base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (<View></View>);
}

export default BottomTabs