
import { useEffect } from 'react';
import 'react-native-reanimated';
import RegistrationPage from '../components/RegistrationPage';
import LoginPage from '../components/LoginPage';
import {Stack} from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';



export default function RootLayout() {
  const Stack = createNativeStackNavigator();

  return (
    
      <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage}/>
      </Stack.Navigator>
    
   );
}

function RootLayoutNav() {
  
}
