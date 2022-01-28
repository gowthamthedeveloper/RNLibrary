import React from 'react';
import HomeStack from '../routes/HomeStack';
import LaunchScreen from '../screen/LaunchScreen';

class App extends React.Component {

  state = {
    showLaunchScreen: true,
  };
  
  render() {
    if (this.state.showLaunchScreen){
        setTimeout(() => {
          this.setState({showLaunchScreen: false});
        }, 2000);
      return <LaunchScreen />;
    } else {
      return <HomeStack />;
    }
  }
};

export default App;
