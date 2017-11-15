import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import styles, { colors } from './styles';
import BlueToothScreen from './blue-tooth-screen';
import PrintScreen from './print-screen';

const MainAppTabs = TabNavigator(
  {
    Print: {
      screen: PrintScreen,
      path: ''
    },
    Bluetooth: {
      screen: BlueToothScreen,
      path: 'bluetooth'
    }
  },
  {
    tabBarOptions: {
      activeTintColor:
        Platform.OS === 'ios' ? colors.activeTintIOS : colors.activeTintAndroid,
      style: {
        backgroundColor: colors.themeColor,
        paddingTop: Constants.statusBarHeight
      },
      indicatorStyle: {
        backgroundColor: colors.tabIndicatorAndroid,
        height: 4
      }
    }
  }
);

/**
 * TODO: Expo draws on top of the screen, and has no control over the StatusBar.
 */
const App = ({}) => (
  <MainAppTabs>
    <StatusBar
      backgroundColor={colors.themeColor}
      barStyle="light-content"
      translucent={false}
    />
  </MainAppTabs>
);

export default App;
