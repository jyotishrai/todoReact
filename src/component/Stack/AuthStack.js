import { createStackNavigator } from 'react-navigation-stack';




import Login from '../Screens/Auth/Login'
import HomeScreen from '../Screens/Home/HomeScreen';
import Drawer from '../Screens/Drawer'


const RouteConfig = {


    "Login": Login,
    "Drawer": Drawer,
    // "HomeScreen": HomeScreen
};



const AppNavigatorConfig = {



    initial: "Login",
    headerMode: "none"


};


const AuthStack = createStackNavigator(RouteConfig, AppNavigatorConfig)

export default AuthStack;