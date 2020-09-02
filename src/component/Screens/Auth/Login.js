
import React, { Component } from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity, navigate } from 'react-native';

import HomeScreen from '../Home/HomeScreen'


//const Login = () => {

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            email: "",
            password: ""

        }


    }



    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.logo}>HeyAPP</Text>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        secureTextEntry
                        onChangeText={text => this.setState({ password: text })} />
                </View>

                <TouchableOpacity onPress={() => {
                    // alert("gdsbjh")
                    console.log("shjdjfbjs", this.props.navigation);

                    this.props.navigation.navigate("Drawer")
                }}
                >
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },

    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },

    inputText: {
        height: 50,
        color: "white"
    },
    forgot: {
        color: "white",
        fontSize: 11,
        opacity: 1
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        opacity: 1
    },
    loginText: {
        color: "white"
    }



});



// export default Login;
