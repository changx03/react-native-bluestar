import React, { Component } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles, { colors } from './styles';

export default class PrintScreen extends Component {
  // TODO: mobx doesn't work in React Native this way
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textInputHeight: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Print</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.form}
          keyboardVerticalOffset={Platform.select({ ios: 0, android: 75 })}
        >
          <TextInput
            style={[
              styles.textInput,
              { height: Math.max(35, this.state.textInputHeight + 10) },
            ]}
            onChangeText={text => this.setState({ text })}
            multiline={true}
            onContentSizeChange={event => {
              this.setState({
                textInputHeight: event.nativeEvent.contentSize.height,
              });
            }}
            value={this.state.text}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
          <View>
            <Button
              onPress={() => {
                console.log('on print button click');
              }}
              title="Print"
            />
            <Button
              onPress={() => {
                this.setState({
                  text: '',
                });
              }}
              title="Clear text"
              color={colors.themeColor}
              accessibilityLabel="Tab the button to clear the text"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
