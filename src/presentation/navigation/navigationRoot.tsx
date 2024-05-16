import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome/welcome';
import SignUpOptions from '../screens/signupOptions/signupOptions';

const Stack = createStackNavigator();

const NavigationRoot = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Welcome"
                    component={Welcome}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="SignUpOptions"
                    component={SignUpOptions}
                />



            </Stack.Navigator>



        </NavigationContainer>

    )

}

export default NavigationRoot;