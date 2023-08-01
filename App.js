
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './src/components/dashboard/dashboard';
import Settings from './src/components/profile/settings';
import Signup from './src/components/login/signup';
import Otp from './src/components/login/otp'
import Interface from './src/components/chatInterface/interface';
import ProfileDetails from './src/components/chatInterface/profileDetails';
import { MenuProvider } from 'react-native-popup-menu';

const Stack = createStackNavigator();


const App = () => {

    return (
        <MenuProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Signup"
                        component={Signup} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Otp"
                        component={Otp} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Dashboard"
                        component={Dashboard} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Settings"
                        component={Settings} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Interface"
                        component={Interface} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="ProfileDetails"
                        component={ProfileDetails} />

                </Stack.Navigator>
            </NavigationContainer>
        </MenuProvider>
    );
}

export default App;