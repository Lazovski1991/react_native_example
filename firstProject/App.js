import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigate from './navigate';

const fonts = () => Font.loadAsync({
  'rob-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'rob-light': require('./assets/fonts/Roboto-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    return (
        <Navigate />
        );
    } else {
      return (
      <AppLoading startAsync={fonts} onFinish={ () => setFont(true) } onError={console.warn}/>
    );
  }
}

const styles = StyleSheet.create({
 
});