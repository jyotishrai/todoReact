


import React, { Component } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, navigation
} from 'react-native';

// import Login from './Auth/Login';



export default class Splash extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    // Hide_Splash_Screen = () => {
    //     this.setState({
    //         isVisible: false
    //     });
    // }


    async componentDidMount() {
        // You can load api data or any other thing here if you want
        const data = await this.navigateToHome();
        if (data !== null) {
            this.props.navigation.navigate('AuthKey');
        }
    }

    // componentDidMount() {
    //     var that = this;

    //     setTimeout(function () {
    //         // this.props.navigation.navigate("Login")
    //     }, 5000);
    // }


    navigateToHome = async () => {
        // Splash screen will remain visible for 5 seconds
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));
        return wait(5000).then(() => this.props.navigation.navigate('AuthKey'))
    };




    render() {




        return (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <Image source={{ uri: "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" }}
                        style={{ height: "100%", width: " 100%", resizeMode: 'contain', flex: 1 }} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },

        SplashScreen_RootView:
        {
            justifyContent: 'center',
            flex: 1,

            position: 'absolute',
            width: '100%',
            height: '100%',
        },

        SplashScreen_ChildView:
        {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00BCD4',
            flex: 1,
        },
    });


