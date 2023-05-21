import { useState } from 'react';
import { StyleSheet,TouchableOpacity,Text,View,TextInput,Button,Icon, Alert } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
//import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// function getCircularReplacer() {
//   const ancestors = [];
//   return function (key, value) {
//     if (typeof value !== "object" || value === null) {
//       return value;
//     }
//     // `this` is the object that value is contained in,
//     // i.e., its direct parent.
//     while (ancestors.length > 0 && ancestors.at(-1) !== this) {
//       ancestors.pop();
//     }
//     if (ancestors.includes(value)) {
//       return "[Circular]";
//     }
//     ancestors.push(value);
//     return value;
//   };
// }


export default function Login({ navigation }){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('abcdef');
    const[cPassword,setcPassword]=useState('abcdef');
    const[phoneNumber,setPhoneNumber]=useState('9999999999');
    const [errortext, setErrortext] = useState('');
    const [loading, setLoading] = useState(false);
    const loginUser = async (email, password) => {
      try {
        const response = await axios.post('http://192.168.181.181:8000/account/login/',JSON.stringify( {
          username: email,
          password: password,
        }),{
          headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
           // "Allow": "POST, OPTIONS", 
            //"Content-Length": "45",
            // "Content-Type": "application/json", 
            // "Cross-Origin-Opener-Policy": "same-origin", 
             //"Date": "Thu, 04 May 2023 14:38:20 GMT", 
            // "Referrer-Policy": "same-origin",
              //"Server": "WSGIServer/0.2 CPython/3.10.1", 
             // "Vary": "Accept, Origin, Cookie",
              // "X-Content-Type-Options": "nosniff",
               // "X-Frame-Options": "DENY"
          }
          }
            );
            const id = response.data.user_id;
            //console.log(id)
        //const { token } = response.data;
        // Save token to async storage or redux state
        // Navigate to home screen
        if (response.status=201) {
        navigation.navigate('HomePage', { id: id });
        }
      } catch (error) {
        console.log(error.response);
      }
      
    };
    const handleLoginPress = async (email,password) => {
      try {
        const response = await fetch('http://192.168.181.181:8000/account/login/', {
          method: 'POST',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
           },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        const json = await response.json();
  
        // Check if login was successful
        if (response.ok) {
          // Save user info to async storage
          await AsyncStorage.setItem('userInfo', JSON.stringify(json));
  
          // Navigate to the homepage
          navigation.navigate('HomePage');
        } else {
          // Handle login error
          Alert.alert('Login Failed', json.error);
        }
      } catch (error) {
        console.error(error);
      }
    };
   
    return(
       
            <View
          
          style={styles.linearGradient}>
            <View style={styles.content}>
            <Text style={styles.welcomeLabel}>Welcome to</Text>
            <Text style={styles.appLabel}>i-Care</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder='e.g. johndoe@gmail.com' 
           //value={email} 
            onChangeText=
            { (email)=>setEmail(email)}
             //{setName}
              />
            <Text style={styles.label}>Password</Text>
            
            <TextInput style={styles.input}  secureTextEntry={true} 
          onChangeText=
          {(password) => setPassword(password)}
          //{setPassword}
          />
            </View>
            <Button
            
             style={styles.button}
             onPress={() => 
              //login(email,password)
              loginUser(email, password)
               //() =>
            //navigation.navigate('HomePage')
            }
  title="LOGIN"
  color="#575DFB"
  accessibilityLabel="Learn more about this purple button"
/>
<View style={{flexDirection:"row"}}>
<Text style={styles.label}>Does'nt have an account?</Text>
<TouchableOpacity  onPress={() =>
            navigation.navigate('Signup')
            }>
<Text style={styles.signupLabel}> Signup</Text>
</TouchableOpacity>
</View>
</View>

    
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderWidth:1,
        borderColor:'#575DFB',
        borderRadius:10,
        padding:8,
        margin:10,
        width:200,
    },
    button: {
        // marginRight: 40,
        // marginLeft: 40,
        // marginTop: 10,
        // paddingTop: 20,
        // paddingBottom: 20,
        // backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderWidth: 1,
        //borderColor: '#fff',
      },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        //height: 200,
        //width: 350,
        flex:1
      },
      label:{
        //marginTop:10,
        paddingTop:10,
        paddingLeft:10,
        color:"#524E4E"
      },
      appLabel:{
        //marginTop:10,
        paddingTop:10,
        paddingLeft:10,
        fontSize:40,
        color:"#575DFB"
      },
      signupLabel:{
        //marginTop:10,
        paddingTop:10,
        paddingLeft:10,
        color:"#575DFB"
      },
      welcomeLabel:{
        //marginTop:10,
        paddingTop:10,
        paddingLeft:10,
        fontSize:20,
        //color:"#575DFB"
      },
      content:{
        marginTop:50,
        paddingTop:10,
      }
   
})