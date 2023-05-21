import { useState,useEffect  } from 'react';
import { StyleSheet,Text,Image, ScrollView,View,TextInput,Button, Alert,TouchableOpacity,FlatList } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import { ListItem,Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';


export default function HomePage({navigation}){
  
    
    const [users, setUsers] = useState([]);
//     const patientList = () => {
//      // setIsLoading(true);
  
//       axios
//         .get("http://192.168.0.100:8000/account/patient/", {
         
//         },{headers:{
//           'Content-Type': "application/json"}})
//           .then(response => {
//             setUsers(response.data);
//           })
//           .catch(error => {
//             console.log(error);
//           });
//     };
//     return(
//         <SafeAreaView style={{flex: 1}}>
//            <ScrollView>
//                     <View style={styles.container}>
//                     <FlatList
//       data={users}
//       keyExtractor={(item, index) => index.toString()}
//       renderItem={({ item }) => (
//         <Text>{item.name}</Text>
//       )}
//     />
//       {persons.map((person) => {
//         return (
//           <View>
//             <TouchableOpacity  onPress={() =>
//             navigation.navigate('Patient')
//             }>
//           <View style={{flexDirection:"row"}}>
            
//               <Avatar
               
//                rounded
//   size="medium"
//   overlayContainerStyle={{backgroundColor: 'blue'}}
  
//   title={person.name[0]}
//   activeOpacity={0.7}
//   //containerStyle={{flex: 3, marginTop: 100}}
//   />
//             <Text style={styles.item}>{person.name}</Text>
            
//           </View>
//           </TouchableOpacity>
//           </View>
        
//         );
//       })}
//     </View>
//     <Button
//             style={styles.submit}
//             onPress={() =>
//               navigation.navigate('CreatePatient')
//               }
//   title="ADD PATIENT"
//   color="#575DFB"
//   accessibilityLabel="Learn more about this purple button"
// /> 
//      </ScrollView>  
     
// </SafeAreaView> 
//     );
// }
const route = useRoute();
const id = route.params.id;
console.log(id);
useEffect(() => {
  axios.get(`http://192.168.181.181:8000/account/patient/?user=${id}`)
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

const renderUser = ({ item }) => (
  <TouchableOpacity  onPress={() =>
                navigation.navigate('Patient', { id: item.id })
                 }>
                   
  <View style={{flexDirection:"row"}
 
}>
  <Avatar
               
                              rounded
                 size="medium"
                 overlayContainerStyle={{backgroundColor: 'blue'}}
                 
                 title={item.first_name[0]}
                 activeOpacity={0.7}
                 //containerStyle={{flex: 3, marginTop: 100}}
                 />
                 <View style={{flexDirection:"column"}}>
    <Text style={styles.item}>{item.first_name}</Text>
    
    </View>
  </View>
   </TouchableOpacity>
);

return (
//   <SafeAreaView style={{flex: 1}}>
// //            <ScrollView>
  <View style={styles.container}>
    <FlatList
      data={users}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderUser}
    />
    <Button
             style={styles.submit}
            onPress={() =>
              navigation.navigate('CreatePatient', { id: id })
              }
  title="ADD PATIENT"
  color="#575DFB"
  accessibilityLabel="Learn more about this purple button"
/> 
  </View>
  // </ScrollView>
  // </SafeAreaView>
);
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   userContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   userEmail: {
//     fontSize: 16,
//   },
// });

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
      },
      titleText: {
        fontSize: 24,
        paddingLeft:8,
        marginLeft:10,
        paddingTop:8,
        marginTop:10
        //fontWeight: 'bold',
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
      contentText: {
        fontSize: 20,
        paddingLeft:8,
        marginLeft:10,
        //fontWeight: 'bold',
      },
      
        container: {
          flex: 1,
          padding: 50,
          alignItems: 'center',
     justifyContent: 'center',
        },
        item: {
          
          padding: 20,
        
          
          fontSize: 15,
          marginTop: 5,
        }
     
})
