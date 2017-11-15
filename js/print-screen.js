import React, { Component } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import styles, { colors } from './styles';

@observer
export default class PrintScreen extends Component {
  // TODO: mobx doesn't work in React Native this way
  @observable inputText = '';

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.header}>
          <Text>Print</Text>
        </View>
        <KeyboardAvoidingView>
          <Text>content print</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.inputText}
            value={this.inputText}
          />
          <Button
            onPress={() => {
              this.inputText = '';
            }}
            title="Clear text"
            color={colors.themeColor}
            accessibilityLabel="Tab the button to clear the text"
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}
