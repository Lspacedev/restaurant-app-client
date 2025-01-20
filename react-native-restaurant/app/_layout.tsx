import 'react-native-reanimated';
import RegistrationPage from '../components/RegistrationPage';
import LoginPage from '../components/LoginPage';
import HomePage from '@/components/HomePage';
import {Stack} from 'expo-router';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';



export default function RootLayout() {
  const Stack = createNativeStackNavigator();

  return (
    <RegistrationPage/>
      // <Stack.Screen name="LoginPage"  />
      //   <Stack.Screen name="RegistrationPage" />
      
    
   );
}

function RootLayoutNav() {
  
}
// component={LoginPage}
// component={RegistrationPage}