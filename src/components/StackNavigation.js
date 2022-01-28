/*
* Configure the navigation framework from the below link
* https://reactnavigation.org/docs/getting-started/
* run the command in your project - npm install react-navigation-stack
*/

import React from 'react';
import {Text, View} from 'react-native';
import { globalStyles } from '../styles/global';

class StackNavigation extends React.Component {

  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;

  //   return {
  //     title: 'A Nested Details Screen',
  //     // /* These values are used instead of the shared configuration! */
  //     // headerStyle: {
  //     //   backgroundColor: navigationOptions.headerTintColor,
  //     // },
  //     // headerTintColor: navigationOptions.headerStyle.backgroundColor,
  //   };
  // };

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: navigation.getParam('name', 'A Nested Details Screen'),
  //   };
  // };

  // static navigationOptions = {
  //   title: 'Home',
  // };

  // constructor(props) {
  //   super(props);

  //   this.props.navigation.setOptions({
  //     title: 'Home'
  //   });
  // }

  // componentDidMount() {
    // this.props.navigation.setOptions({
    //   headerTitle: 'headerTitle',
    // });
    // this.props.navigation.setParams({ title: 'Dynamic Title' });

    // this.props.navigation.setParams({
    //   appBar: {
    //       title: 'Clientes'
    //   }
  // });
    // this.props.navigation.setOptions({
    //   title: `Your Updated Title`,
    // })
  // }

  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>{this.props.navigation.getParam('name')} Screen</Text>
      </View>
    );
  }
}

export default StackNavigation;