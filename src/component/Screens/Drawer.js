

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';




export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }





    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContentOptions={{
                        activeTintColor: '#e91e63',
                        itemStyle: { marginVertical: 5 },
                    }}>
                    <Drawer.Screen
                        name="FirstPage"
                        options={{ drawerLabel: 'First page Option' }}
                        component={firstScreenStack} />
                    <Drawer.Screen
                        name="SecondPage"
                        options={{ drawerLabel: 'Second page Option' }}
                        component={secondScreenStack} />
                </Drawer.Navigator>
            </NavigationContainer>

        )
    }
}






