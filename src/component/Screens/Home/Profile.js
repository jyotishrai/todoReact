
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';




export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }





    render() {
        return (
            <View>
                <Text>Hello Profile</Text>
            </View>
        )
    }
}