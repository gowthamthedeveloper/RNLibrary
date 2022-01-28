import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class LaunchScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native Helper</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
});

export default LaunchScreen;