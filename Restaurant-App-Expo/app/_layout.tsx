import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import LoginPage from '../components/LoginPage'



export default function RootLayout() {
  return (
    <div>
      <LoginPage/>
    </div>
   );
}

function RootLayoutNav() {
  

  return (
   <div>
     <LoginPage/>
   </div>
  );
}
