import React, { Component } from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import toastExample from 'react-star';
import styles, { colors } from './styles';

export default class BlueToothScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Blue tooth list</Text>
        </View>
        <Text>content blue tooth list</Text>
        <Button
          title="text"
          onPress={() => {
            toastExample.show();
          }}
        />
      </View>
    );
  }
}
