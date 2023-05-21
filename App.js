import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login';
import SignUp from './signup';
import CreatePatient from './createPatient';
import Patient from './patient';
import {LinearGradient} from 'expo-linear-gradient';
import Profile from './profile';
import HomePage from './homePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
          />
          
          <Stack.Screen
            name="HomePage"
            component={HomePage}
          />
          <Stack.Screen
            name="Signup"
            component={SignUp}
          />
           <Stack.Screen
            name="CreatePatient"
            component={CreatePatient}
          />
          <Stack.Screen
            name="Patient"
            component={Patient}
          />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3DD96',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
