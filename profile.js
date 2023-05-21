import { useState } from 'react';
import { StyleSheet,Text,View,TextInput,Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
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
            
            <Text style={styles.titleText}>Name</Text>
           
            <Text style={styles.contentText}>Phone number</Text>
            
            <Text style={styles.contentText}>Email</Text>
            
            <Avatar  size="xlarge" rounded icon={{ name: 'user',type: 'font-awesome' }} />
<Ionicons style={styles.settingIcon} name="settings" size={32}  />
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>

<Text style={styles.titleText}>Payment</Text>
<Text style={styles.contentText}>Payment modes</Text>

<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>

<Text style={styles.titleText}>Order History</Text>
<View style={styles.orderItem}>
<Text>Meals x 5</Text>
<Text>January 21 , 12:20</Text>
</View>
<View style={styles.orderItem}>
<Text>Meals x 5</Text>
<Text>January 21 , 12:20</Text>
</View>
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
<Divider width={400} />
<Text style={styles.titleText}>Help</Text>

<Button
            style={styles.submit}
  onPress={() => Alert.alert('Button with adjusted color pressed')}
  title="LOGOUT"
  color="#F3DD96"
  accessibilityLabel="Learn more about this purple button"
/>
</LinearGradient>
</SafeAreaView>    
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F3DD96',
        //alignItems:'center',
        //justifyContent:'center',
        
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
        paddingLeft:8,
        marginLeft:10,
        paddingTop:8,
        marginTop:10
        //fontWeight: 'bold',
      },
      contentText: {
        fontSize: 20,
        paddingLeft:8,
        marginLeft:10,
        //fontWeight: 'bold',
      },
    linearGradient: {
        //alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 5,
        //height: 200,
        //width: 350,
      },
      submit: {
        // marginRight: 40,
        // marginLeft: 40,
        //marginTop: 50,
        //paddingTop: 50,
        // paddingBottom: 20,
        // backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderWidth: 1,
        //padding:8,
        //margin:10,
        //height: 200,
        //width: 10,
        //borderColor: '#fff',
      },
      settingIcon:{
        paddingLeft:8,
        marginLeft:10,
      },
      orderItem:{
        paddingLeft:8,
        marginLeft:10,
        paddingTop:8,
        marginTop:10,
        
      }
})