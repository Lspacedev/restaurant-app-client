import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useEffect } from 'react';
import 'react-native-reanimated';
import LoginPage from '../components/LoginPage';
import {Stack} from 'expo-router';



export default function RootLayout() {
  return (
    <div>
      <LoginPage/>
      <Stack>
        <Stack.Screen name='LoginPage'/>
        <Stack.Screen name='RegistrationPage'/>
      </Stack>
    </div>
   );
}

function RootLayoutNav() {
  
}
