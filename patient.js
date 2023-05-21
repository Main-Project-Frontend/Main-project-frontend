import { useState,useEffect } from 'react';
import { StyleSheet,Text,View,TextInput,Button, Alert,ToastAndroid,ActivityIndicator } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { color } from 'react-native-elements/dist/helpers';
import { useRoute } from '@react-navigation/native';
//import {ImagePicker} from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
//var ImagePicker = require('react-native-image-picker');
// const pickImage3=async ()=>{
//   //const result = await launchImageLibrary()
  
// }
export default function Patient(){
    const[name,setName]=useState('Shaun');
    const[email,setEmail]=useState('shaun2gail.com');
    const[password,setPassword]=useState('abcdef');
    const[cPassword,setcPassword]=useState('abcdef');
    const[phoneNumber,setPhoneNumber]=useState('9999999999');
    const [userData, setUserData] = useState(null);
    const route = useRoute();
    const [filePath, setFilePath] = useState({});
    const [imageUri, setImageUri] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [disease, setDisease] = useState(null);
    const [predicting, setPredicting] = useState(false);
    //const [image, setImage] = useState(null);
    const [image, setImage] = useState(null);
    const LoadingSpinner = () => (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
    const predictDisease = async (patientid) => {
      {predicting ? (
        <LoadingSpinner />
      ) : (
        prediction && <Text>{prediction}</Text>
      )}
      try {
        setPredicting(true);
        const response = await axios.post('http://192.168.181.181:8000/eye/disease/check/',JSON.stringify( {
          patient:patientid
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
            //const id = response.data.user_id;
            //console.log(id)
        //const { token } = response.data;
        // Save token to async storage or redux state
        // Navigate to home screen
        if (response.status=200) {
          setPredicting(false);
        pred=response.data.result;
        setDisease(response.data.result)
        console.log(pred);
        }
      } catch (error) {
        console.log(error.response);
      }
      
    };
  //   const predictDisease = async => {
  //     axios.get(`http://192.168.0.103:8000/eye/disease/check/`)
  //       .then(response => {
  //         setPrediction(response.data);
  //         console.log(prediction);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   };
    const showToast = () => {
      ToastAndroid.show('Image uploaded successfully', ToastAndroid.SHORT);
    };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    const apiUrl = 'http://192.168.181.181:8000/eye/'
    let formData = new FormData();

    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    formData.append('patient',userData.id);
    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response', response.data);
      if(response.status=201){
        showToast()
      }
    } catch (error) {
      console.log(error);
    }
    
         
  };

  //   try {
  //     let response = await fetch('http://192.168.0.100:8000/eye/', {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     formData.append('patient',userData.id);
  //     let json = await response.json();
  //     console.log(json);
  //     if(response.status=201){
  //       showToast()
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
    // useEffect(() => {
    //   (async () => {
    //     if (Platform.OS !== 'web') {
    //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //       if (status !== 'granted') {
    //         alert('Sorry, we need camera roll permissions to make this work!');
    //       }
    //     }
    //   })();
    // }, []);
    // const pickImage = async () => {
    //   let result = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });
  
    //   if (!result.cancelled) {
    //     setImage(result.uri);
    //     console.log(result.uri);
    //   }
    // };
    const handleChoosePhoto = () => {
      const options = {
        noData: true,
      };
      ImagePicker.launchImageLibrary(options, (response) => {
        if (response.uri) {
          setImageUri(response.uri);
        }
      });
    };
  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log(
          'User tapped custom button: ',
          response.customButton
        );
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };
  const pickImage1 = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log('Response = ', response);
  
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        // You can now use the image uri to display the selected image
      }
    });
  };
  // const pickImage = async () => {
  //   try {
  //     let result = await ImagePicker.launchImageLibrary({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });
  //     console.log(result);
  
  //     if (!result.cancelled) {
  //       setImage(result.uri);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
    const handleChooseImage = () => {
      const options = {
        noData: true
      };
      //console.log(ImagePicker);
      launchImageLibrary(options, response => {
        if (response.uri) {
          // Call function to handle image upload
          handleImageUpload(response);
        }
      });
    };
    const handleImageUpload = async image => {
      try {
        const formData = new FormData();
        formData.append('image', {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        });
        const response = await axios.post(`http://192.168.181.181:8000/api/predict_disease/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    // const uploadImage = async (image, patient) => {
    //   try {
    //     const response = await axios.post('http://192.168.0.103:8000/account/login/',JSON.stringify( {
    //       username: email,
    //       password: password,
    //     }),{
    //       headers: {
    //         Accept: "application/json",
    //         'Content-Type': 'application/json',
    //        // "Allow": "POST, OPTIONS", 
    //         //"Content-Length": "45",
    //         // "Content-Type": "application/json", 
    //         // "Cross-Origin-Opener-Policy": "same-origin", 
    //          //"Date": "Thu, 04 May 2023 14:38:20 GMT", 
    //         // "Referrer-Policy": "same-origin",
    //           //"Server": "WSGIServer/0.2 CPython/3.10.1", 
    //          // "Vary": "Accept, Origin, Cookie",
    //           // "X-Content-Type-Options": "nosniff",
    //            // "X-Frame-Options": "DENY"
    //       }
    //       }
    //         );
    //         const id = response.data.user_id;
    //         //console.log(id)
    //     //const { token } = response.data;
    //     // Save token to async storage or redux state
    //     // Navigate to home screen
    //     if (response.status=201) {
    //     navigation.navigate('HomePage', { id: id });
    //     }
    //   } catch (error) {
    //     console.log(error.response);
    //   }
      
    // };
const id = route.params.id;
console.log(id);
useEffect(() => {
  fetchUserData();
}, []);
const fetchUserData = async => {
      axios.get(`http://192.168.181.181:8000/account/patient/${id}/`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    return(
        <SafeAreaView style={{flex: 1}}>
            <View
            
          style={styles.linearGradient}>
            <View>
            <Text  style={styles.mainHeading}>Patient Details</Text>
            </View>
            
            <View style={styles.content}>
            {userData ? (
    <>
            <Text style={styles.contentText}>{userData.first_name}</Text>
           
            <Text style={styles.contentText}>{userData.phone}</Text>
            
            <Text style={styles.contentText}>{userData.email}</Text>
            </>
  ) : (
    <Text>Loading user data...</Text>
  )}
            </View>
           
            <Button
            style={styles.submit}
  onPress={pickImage}
  title="Select Image"
  color="#575DFB"
  accessibilityLabel="Learn more about this purple button"
/>
{image && <Button title="Upload" onPress={uploadImage} />}
<Button
            style={styles.submit}
  onPress={()=>{predictDisease(userData.id)}}
  title="Predict disease"
  color="#575DFB"
  accessibilityLabel="Learn more about this purple button"
/>
</View>
{predicting && <ActivityIndicator />}

      {/* Show predicted value if available */}
      {disease !== null && <Text>{disease}</Text>}

</SafeAreaView> 
    );
}
const styles=StyleSheet.create({
    
    submit: {
        // marginRight: 40,
        // marginLeft: 40,
        //  marginTop: 70,
          paddingTop: 70,
        // paddingBottom: 20,
        // backgroundColor: '#68a0cf',
        borderRadius: 20,
        borderWidth: 1,
        padding:12,
        margin:12
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
    buttons:{
      
      padding:50,
      margin:50,
     
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
        color:"#575DFB",
        fontSize:24
      },
      titleText: {
        fontSize: 24,
        paddingLeft:8,
        marginLeft:10,
        paddingTop:15,
        marginTop:15,
        //color:'#575DFB'
        //fontWeight: 'bold',
      },
      contentText: {
        fontSize: 20,
        paddingLeft:8,
        marginLeft:10,
        paddingTop:15,
        marginTop:15
        //fontWeight: 'bold',
      }
})
