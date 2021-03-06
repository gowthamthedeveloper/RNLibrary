import 'react-native-gesture-handler';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawerReview';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('../common/assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('../common/assets/fonts/Nunito-Bold.ttf'),
});

export default function AppReview() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}