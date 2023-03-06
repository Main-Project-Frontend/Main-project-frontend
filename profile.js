import { useState } from 'react';
import { StyleSheet,Text,View,TextInput,Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
export default function Profile(){
    const[name,setName]=useState('Shaun');
    const[email,setEmail]=useState('shaun2gail.com');
    const[passsword,setPassword]=useState('abcdef');
    const[cPassword,setcPassword]=useState('abcdef');
    const[phoneNumber,setPhoneNumber]=useState('9999999999');
    return(
        <SafeAreaView style={{flex: 1}}>
            <LinearGradient
          colors={['#F3DD96', 'white' ]}
          style={styles.linearGradient}>
            <Text  style={styles.titleText}>  My Account</Text>
            
            <Text>Name</Text>
           
            <Text>Phone number</Text>
            
            <Text>Email</Text>
            <TextInput style={styles.input}  onChangeText={(val)=>setName(val)}/>
            <Button
            style={styles.submit}
  onPress={() => Alert.alert('Button with adjusted color pressed')}
  title="LOGOUT"
  color="#F3DD96"
  accessibilityLabel="Learn more about this purple button"
/>
<Ionicons name="settings" size={32}  />
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
<Divider />
<Divider />
<Divider />
<Divider width={100}/>
<Text>Already have an account?</Text>
</LinearGradient>
</SafeAreaView>    
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
    titleText: {
        fontSize: 24,
        //fontWeight: 'bold',
      },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        //height: 200,
        //width: 350,
      },
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
})