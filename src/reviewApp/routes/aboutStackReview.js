import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Header from '../shared/headerReview';
import AboutReview from '../components/aboutReview';

const screens = {
  About: {
    screen: AboutReview,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About GameZone' navigation={navigation} />
      }
    },
  },
}

const AboutStackReview = createNativeStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default AboutStackReview;
