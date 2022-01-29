import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Header from '../shared/headerReview';
import ReviewDetails from '../components/reviewDetails';
import HomeReview from '../components/homeReview';

const screens = {
  Home: {
    screen: HomeReview,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='GameZone' navigation={navigation} />
      }
    },
  },
  ReviewDetail: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

// home stack navigator screens
const HomeStackReview = createNativeStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStackReview;