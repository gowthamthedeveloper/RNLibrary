import React from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';


class HomeScreen extends React.Component {
  state = {
    componentList: [{name: 'Navigation'}, {name: 'UseState'}],
  };

  navigateToSelectedComponentScreen = (componentItem) => {
    console.log('navigateToSelectedComponentScreen called')
    ;
  };

  render() {
    return (
      <View style={globalStyles.container}>
        <FlatList
          data={this.state.componentList}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('StackNavigation', item)}}>
              <Text style={globalStyles.titleText}>{item.name}</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

export default HomeScreen;