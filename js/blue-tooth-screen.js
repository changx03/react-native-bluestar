import React, { Component } from 'react';
import { Button, View, Text, Platform, StatusBar } from 'react-native';
import styles, { colors } from './styles';
import StarNative from '../native/StarNativeModule';

export default class BlueToothScreen extends Component {
    state = {
        greeting: null,
    };

    componentWillMount() {
        StarNative.emitter.addListener('EXAMPLE_EVENT', ({ greeting }) => {
            this.setState({ greeting });
        });
    }

    componentWillMount() {
        StarNative.emitter.removeAllListeners();
    }

    _onPress = () => {
        StarNative.exampleMethod();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Blue tooth list</Text>
                </View>
                <Text>content blue tooth list</Text>
                <Text>{this.state.greeting}</Text>
                <Button title="text" onPress={this._onPress} />
            </View>
        );
    }
}
