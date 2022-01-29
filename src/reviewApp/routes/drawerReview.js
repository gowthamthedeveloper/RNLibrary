import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from '@react-navigation/native';

// stacks
import HomeStackReview from './homeStackReview';
import AboutStackReview from './aboutStackReview';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStackReview,
  },
  About: {
    screen: AboutStackReview,
  },
});

export default createAppContainer(RootDrawerNavigator);