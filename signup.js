import { useState } from 'react';
import { StyleSheet,Text,View,TextInput,Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
export default function SignUp(){
    const[name,setName]=useState('Shaun');
    const[email,setEmail]=useState('shaun2gail.com');
    const[passsword,setPassword]=useState('abcdef');
    const[cPassword,setcPassword]=useState('abcdef');
    const[phoneNumber,setPhoneNumber]=useState('9999999999');
    return(
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient
            colors={['#F3DD96', '#ffff' ]}
          style={styles.linearGradient}>
            <Text>Name</Text>
            <TextInput style={styles.input} placeholder='e.g. John Doe' onChangeText={(val)=>setName(val)}/>
            <Text>Email</Text>
            <TextInput style={styles.input} placeholder='e.g. johndoe@gmail.com' onChangeText={(val)=>setName(val)}/>
            <Text>Password</Text>
            <TextInput style={styles.input}  onChangeText={(val)=>setName(val)}/>
            <Text>Confirm Password</Text>
            <TextInput style={styles.input}  onChangeText={(val)=>setName(val)}/>
            <Text>Phone number</Text>
            <TextInput style={styles.input}  onChangeText={(val)=>setName(val)}/>
            <Button
            style={styles.submit}
  onPress={() => Alert.alert('Button with adjusted color pressed')}
  title="SIGN UP"
  color="#F3DD96"
  accessibilityLabel="Learn more about this purple button"
/>
<Text>Already have an account?</Text>
</LinearGradient>
</SafeAreaView> 
    );
}
const styles=StyleSheet.create({
    
    submit: {
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
    input:{
        borderWidth:1,
        borderColor:'#777',
        padding:8,
        margin:10,
        width:200,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        //height: 200,
        //width: 350,
      },
})