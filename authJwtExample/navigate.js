import React from 'react';
import AccessPage from './components/AccessPage';
import Auth from './components/Auth';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Auth"
                component={Auth}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="AccessPage"
                component={AccessPage}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}