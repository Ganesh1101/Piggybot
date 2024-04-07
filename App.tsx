import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import login from './src/Auth/login';
import signUp from './src/Auth/signUp';
import OTP_verification from './src/Auth/OTPVerification';
import Success from './src/Auth/success';
import SplashScreen from './src/Auth/SplashScreen';
import PiggyBot from './src/Screens/bot';
import ImageBot from './src/Screens/imageBot';
import voiceBot from './src/Screens/voiceAssistant';

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen 
        name='Login' 
        component={login} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='Signup' 
        component={signUp} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='OtpVerification' 
        component={OTP_verification} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='Success' 
        component={Success} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name='Splash' 
        component={SplashScreen} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const LandingStack = () => {
  return (
    <Tab.Navigator initialRouteName='Bot'>
      <Tab.Screen 
        name='Bot' 
        component={PiggyBot} 
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name='imageBot' 
        component={ImageBot} 
        options={{ headerShown: false }}
      />
       <Tab.Screen 
        name='voiceBot' 
        component={voiceBot} 
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Auth' 
          component={AuthStack} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Landing' 
          component={LandingStack} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
