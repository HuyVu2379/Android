import { Text, SafeAreaView, StyleSheet,View,Pressable,TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./components/Login"
import HomeScreen from "./components/HomeScreen"
import AddJob from "./components/AddJob"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="AddJob" component={AddJob} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
