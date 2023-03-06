import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login';
import SignUp from './signup';
import {LinearGradient} from 'expo-linear-gradient';
import Profile from './profile';

export default function App() {
  return (
    <Profile/>
   
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
