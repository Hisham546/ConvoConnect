import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcome/welcome';
import SignUpOptions from '../screens/signupOptions/signupOptions';
import SignUpPage from '../screens/signupOptions/signupPage/signupPage';
import Verification from '../screens/signupOptions/verifiication/verification';
import Home from '../screens/home/home';
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
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="SignUpPage"
                    component={SignUpPage}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Verification"
                    component={Verification}
                />
                   <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />


            </Stack.Navigator>



        </NavigationContainer>

    )

}

export default NavigationRoot;