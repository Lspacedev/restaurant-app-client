import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import StackNavigator from '@/navigation/StackNavigator';
import LoginPage from '@/screens/LoginPage';



export default function RootLayout() {


  return (
    // <LoginPage/>
    <StackNavigator/>
   );
}

