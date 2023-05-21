import { useState } from 'react';
import { StyleSheet,Text,View,TextInput,Button, Alert,ScrollView,TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({ navigation }){
    const[firstName,setFirstName]=useState('Shaun');
    const[lastName,setLastName]=useState('Shaun');
    const[userName,setUsername]=useState('abcdef');
    const[email,setEmail]=useState('shaun2gail.com');
    const[password,setPassword]=useState('abcdef');
    const[confirmpassword,setConfirmPassword]=useState('abcdef');
    const[phoneNumber,setPhoneNumber]=useState('9999999999');
    const signup = async (firstName,lastName,email, password,userName,phoneNumber) => {
      try {
        const response = await axios.post('http://192.168.181.181:8000/account/user/',JSON.stringify( {
          first_name:firstName,
          last_name:lastName,
          username: userName,
          email:email,
          password: password,
          phone:phoneNumber
        }),{
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            // "Allow": "POST, OPTIONS", 
            // "Content-Length": "45",
            //  "Content-Type": "application/json", 
            //  "Cross-Origin-Opener-Policy": "same-origin", 
            //  //"Date": "Thu, 04 May 2023 14:38:20 GMT", 
            //  "Referrer-Policy": "same-origin",
            //   "Server": "WSGIServer/0.2 CPython/3.10.1", 
            //   "Vary": "Accept, Origin, Cookie",
            //    "X-Content-Type-Options": "nosniff",
            //     "X-Frame-Options": "DENY"
          }
          }
            );
        //const { token } = response.data;
        // Save token to async storage or redux state
        // Navigate to home screen
        if (response.status=201) {
        navigation.navigate('Login');
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    return(
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View
            
          style={styles.linearGradient}
          >
            <View>
            <Text  style={styles.mainHeading}>i-Care</Text>
            </View>
            <View style={styles.content}>
            
            <Text  style={styles.label}>First Name</Text>
            <TextInput style={styles.input} placeholder='e.g. John Doe' onChangeText={(firstName)=>setFirstName(firstName)}/>
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input}  onChangeText={(lastName)=>setLastName(lastName)}/>
            <Text style={styles.label}>Username</Text>
            <TextInput style={styles.input}  onChangeText={(userName)=>setUsername(userName)}/>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder='e.g. johndoe@gmail.com' onChangeText={(email)=>setEmail(email)}/>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true}  onChangeText={(passsword)=>setPassword(passsword)}/>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.input}  onChangeText={(confirmpassword)=>setConfirmPassword(confirmpassword)}/>
            <Text style={styles.label}>Phone number</Text>
            <TextInput style={styles.input}  onChangeText={(phoneNumber)=>setPhoneNumber(phoneNumber)}/>
            
            </View>
            <Button
            style={styles.submit}
  onPress={() => signup(firstName, lastName, email, password, userName, phoneNumber)}
  title="SIGN UP"
  color="#575DFB"
  accessibilityLabel="Learn more about this purple button"
/>
<View style={{flexDirection:"row"}}>
<Text style={styles.label}>Already have an account?</Text>
<TouchableOpacity  onPress={() =>
            navigation.navigate('Login')
            }>
<Text style={styles.signupLabel}> Login</Text>
</TouchableOpacity>
</View>
</View>
</ScrollView>
</SafeAreaView> 
    );
}
const styles=StyleSheet.create({
    
    submit: {
        // marginRight: 40,
        // marginLeft: 40,
         //marginTop: 10,
        // paddingTop: 20,
        // paddingBottom: 20,
        // backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderWidth: 1,
        paddingTop:30
        //borderColor: '#fff',
      },
    input:{
        borderWidth:1,
        borderColor:'#575DFB',
        padding:8,
        margin:10,
        width:200,
        borderRadius:10,
    },
    linearGradient: {
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        //height: 200,
        //width: 350,
      },
      label:{
        //marginTop:10,
        paddingTop:10,
        paddingLeft:10,
        color:"#524E4E"
      },
      content:{
        marginTop:50,
        paddingTop:10,
      },
      signupLabel:{
        //marginTop:10,
        paddingTop:10,
        paddingLeft:10,
        color:"#575DFB"
      },
      mainHeading:{
        paddingTop:10,
        paddingLeft:10,
        color:"#000000",
        fontSize:24
      }
})