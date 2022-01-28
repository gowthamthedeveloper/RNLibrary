import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screen/HomeScreen';
import StackNavigation from '../components/StackNavigation';

const screens = {
    Home: {
        screen: HomeScreen
    },
    StackNavigation: {
        screen: StackNavigation
    },
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);