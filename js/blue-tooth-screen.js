import React, { Component } from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import styles, { colors } from './styles';

export default class BlueToothScreen extends Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <Text>Blue tooth list</Text>
        </View>
        <Text>content blue tooth list</Text>
      </View>
    );
  }
}
