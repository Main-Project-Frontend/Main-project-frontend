import { useState } from 'react';
import { StyleSheet,Text,View,TextInput,Button,Icon } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Login(){
    const[name,setName]=useState('Shaun');
    const[email,setEmail]=useState('shaun2gail.com');
    const[passsword,setPassword]=useState('abcdef');
    const[cPassword,setcPassword]=useState('abcdef');
    const[phoneNumber,setPhoneNumber]=useState('9999999999');
    return(
       
            <LinearGradient
          colors={['#F3DD96', '#ffff' ]}
          style={styles.linearGradient}>
           
            <Text>Email</Text>
            <TextInput style={styles.input} placeholder='e.g. johndoe@gmail.com' onChangeText={(val)=>setName(val)}/>
            <Text>Password</Text>
            
            <TextInput style={styles.input}  onChangeText={(val)=>setName(val)}/>
           
            <Button
            
             style={styles.button}
  onPress={() => Alert.alert('Button with adjusted color pressed')}
  title="LOGIN"
  color="#F3DD96"
  accessibilityLabel="Learn more about this purple button"
/>
<Text>Does'nt have an account?</Text>

</LinearGradient>
    
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F3DD96',
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderWidth:1,
        borderColor:'#777',
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
     
   
})