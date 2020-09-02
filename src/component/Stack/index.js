import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Splash from '../Screens/Splash';

//import * as Utils from '../utility';
import AuthStack from '../Stack/AuthStack';
import Login from '../Screens/Auth/Login';



const RootNavigator = createSwitchNavigator({

    "Splash": Splash,

    // "AuthKey": Login,
    "AuthKey": AuthStack,

}, {
        initialRouteName: "Splash"
    });


export default createAppContainer(RootNavigator);