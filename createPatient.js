import { useState } from 'react';
import { StyleSheet,Text,View,TextInput,Button, Alert, ScrollView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';


export default function CreatePatient({ navigation }){
  const route = useRoute();
const id = route.params.id;
console.log(id);
  const[firstName,setFirstName]=useState('Shaun');
  const[lastName,setLastName]=useState('Shaun');
  const[gender,setGender]=useState('F');
  const[email,setEmail]=useState('');
  const[age,setAge]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const createPatient = async (firstName,lastName, email, gender,age,phoneNumber) => {
    try {
      const response = await axios.post('http://192.168.181.181:8000/account/patient/',JSON.stringify( {
        first_name:firstName,
          last_name:lastName,
          email:email,
          gender:gender,
          age:age,
          phone:phoneNumber,
          examiner:id
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
      navigation.navigate('HomePage', { id: id });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
    
    return(
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View
            
          style={styles.linearGradient}>
            <View>
            <Text  style={styles.mainHeading}>i-Care</Text>
            </View>
            <View style={styles.content}>
            <Text  style={styles.label}>First Name</Text>
            <TextInput style={styles.input} placeholder='e.g. John Doe' onChangeText={(firstName)=>setFirstName(firstName)}/>
            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.input}  onChangeText={(lastName)=>setLastName(lastName)}/>
            <Text style={styles.label}>Gender</Text>
            <TextInput style={styles.input}  onChangeText={(gender)=>setGender(gender)}/>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder='e.g. johndoe@gmail.com' onChangeText={(email)=>setEmail(email)}/>
            <Text style={styles.label}>Age</Text>
            <TextInput style={styles.input}  onChangeText={(age)=>setAge(age)}/>
            <Text style={styles.label}>Phone number</Text>
            <TextInput style={styles.input}  onChangeText={(phoneNumber)=>setPhoneNumber(phoneNumber)}/>
            </View>
            <Button
            style={styles.submit}
  onPress={() => createPatient(firstName,lastName,email, gender, age,phoneNumber)}
  title="CREATE PATIENT"
  color="#575DFB"
  accessibilityLabel="Learn more about this purple button"
/>

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
        
        //borderColor: '#fff',
      },
    input:{
        borderWidth:1,
        borderColor:'#575DFB',
        padding:8,
        margin:10,
        width:200,
        borderRadius:10
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
      mainHeading:{
        paddingTop:10,
        paddingLeft:10,
        color:"#000000",
        fontSize:24
      }
})