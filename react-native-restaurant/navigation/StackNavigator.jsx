import HomePage from "@/components/HomePage";
import LoginPage from "@/components/LoginPage";
import RegistrationPage from "@/components/RegistrationPage";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function StackNavigator() {
  console.log("stack");
  return (
    <Stack.Navigator>
      <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}
