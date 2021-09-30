import React, {useState} from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={
            {
              title: 'FirstPage',
              headerStyle: {backgroundColor: '#eb5d3d', height: 50},
              headerTitleStyle: {fontWeight: '400'}
            }
          }
      />
      <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{title: 'SecondPage'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
}