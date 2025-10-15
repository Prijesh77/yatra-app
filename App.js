// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import RateRideScreen from './screens/RateRideScreen';
import RideConfirmScreen from './screens/RideConfirmScreen';
import RideOptionsScreen from './screens/RideOptionsScreen';
import RideTrackingScreen from './screens/RideTrackingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();
console.log("I am here");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RideOptions" component={RideOptionsScreen} />
        <Stack.Screen name="RideConfirm" component={RideConfirmScreen} />
        <Stack.Screen name="RideTracking" component={RideTrackingScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="RateRide" component={RateRideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
