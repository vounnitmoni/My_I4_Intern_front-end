// import React, {useState} from 'react'
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
// import { useNavigation } from '@react-navigation/native';
// import { user_login } from '../../api/UserApi';

// const LoginScreen = () => {
//     const navigation = useNavigation();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [seePassword, setSeePassword] = useState(true);
//     const [checkValidEmail, setCheckValidEmail] = useState(false);

// //   const handleCheckEmail = text => {
// //     let re = /\S+@\S+\.\S+/;
// //     let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// //     setUsername(text);
// //     if (re.test(text) || regex.test(text)) {
// //       setCheckValidEmail(false);
// //     } else {
// //       setCheckValidEmail(true);
// //     }
// //   };

// //   const checkPasswordValidity = value => {
// //     const isNonWhiteSpace = /^\S*$/;
// //     if (!isNonWhiteSpace.test(value)) {
// //       return 'Password must not contain Whitespaces.';
// //     }

// //     const isContainsUppercase = /^(?=.*[A-Z]).*$/;
// //     if (!isContainsUppercase.test(value)) {
// //       return 'Password must have at least one Uppercase Character.';
// //     }

// //     const isContainsLowercase = /^(?=.*[a-z]).*$/;
// //     if (!isContainsLowercase.test(value)) {
// //       return 'Password must have at least one Lowercase Character.';
// //     }

// //     const isContainsNumber = /^(?=.*[0-9]).*$/;
// //     if (!isContainsNumber.test(value)) {
// //       return 'Password must contain at least one Digit.';
// //     }

// //     const isValidLength = /^.{8,16}$/;
// //     if (!isValidLength.test(value)) {
// //       return 'Password must be 8-16 Characters Long.';
// //     }

// //     // const isContainsSymbol =
// //     //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
// //     // if (!isContainsSymbol.test(value)) {
// //     //   return 'Password must contain at least one Special Symbol.';
// //     // }

// //     return null;
// //   };

//   const handleLogin = () => {
//     // const checkPassowrd = checkPasswordValidity(password);
//     // if (!checkPassowrd) {
//       user_login({
//         username: username,
//         password: password,
//       })
//         .then(result => {
//           // if (result.status == 200) {
//             AsyncStorage.setItem('AccessToken', result.data.token);
//             navigation.navigate("Teacher Home");
//           // }
//         })
//         .catch(err => {
//           console.error(err);
//         });
//     // } else {
//     //   alert(checkPassowrd);
//     // }
//   };


//     return (
//     <View style = {styles.container}>
//         <View style = {styles.wrapper}>
//             <TextInput style = {styles.input} 
//                 placeholder='Enter Username' 
//                 value={username}
//                 onChangeText={(newUsername)=> setUsername(newUsername)}
//             />
//             <TextInput style = {styles.input} 
//                 placeholder='Enter Password' 
//                 value={password}
//                 onChangeText={(newPassword)=> setPassword(newPassword)} />
         
//             <Button title='Login' onPress={handleLogin}/>
//         </View>
//     </View>  
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     wrapper: {
//         width: '80%'
//     },
    
//     input: {
//        marginBottom: 12,
//        borderWidth: 1,
//        borderColor: '#bbb',
//        borderRadius: 5,
//        paddingHorizontal: 14 
//     }
// })

// export default LoginScreen

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { user_login } from '../../api/UserApi';
import { KeyboardAvoidingView } from 'react-native';
export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    // let re = /\S+@\S+\.\S+/;
    // let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setUsername(text);
    // if (re.test(text) || regex.test(text)) {
    //   setCheckValidEmail(false);
    // } else {
      setCheckValidEmail(true);
    // }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    // const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    // if (!isContainsUppercase.test(value)) {
    //   return 'Password must have at least one Uppercase Character.';
    // }

    // const isContainsLowercase = /^(?=.*[a-z]).*$/;
    // if (!isContainsLowercase.test(value)) {
    //   return 'Password must have at least one Lowercase Character.';
    // }

    // const isContainsNumber = /^(?=.*[0-9]).*$/;
    // if (!isContainsNumber.test(value)) {
    //   return 'Password must contain at least one Digit.';
    // }

    // const isValidLength = /^.{8,16}$/;
    // if (!isValidLength.test(value)) {
    //   return 'Password must be 8-16 Characters Long.';
    // }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      user_login({
        username: username,
        password: password,
      })
        .then(result => {
          if (result.status == 200) {
            AsyncStorage.setItem('AccessToken', result.data.token);
            if(result.data.roles == "ROLE_TEACHER"){
                navigation.navigate('Teacher Home');
            }else{
                navigation.navigate('StudentHome')
            }
          }else if(result.status == 401) {
            alert("Wrong Password!")
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
    }
  };

  return (
    // <View style={styles.container}>
    //     <View style={styles.header}>

    //     </View>

    //     <View style={styles.loginSession}>
            
    //     </View>
        
    //     <View style={styles.bottom}>

    //     </View>
    // </View>
          <ImageBackground style={styles.container} source={require('../../assets/background.jpg')}>
            <View style={styles.header}>
                <View style={styles.logo}>
                      <Image style={{width: 150, height: 50,borderRadius: 10,
                      shadowColor: '#000000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 2,
                      shadowRadius: 3,
                      elevation: 3,
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10}} source={require('../../assets/logo.png')}></Image>
                </View>
                <View style={styles.title}>
                      <Text style={{fontSize: 30, fontWeight: '500', color: "white"}}>LOGIN</Text>
                </View>
            </View>
              <View style={styles.loginContainer}>
                  <View style={styles.login}>
                      <View style={styles.login2}>
                          <View style={styles.wrapperInput}>
                            <TextInput
                              style={styles.input}
                              placeholder="Email"
                              value={username}
                              onChangeText={text => handleCheckEmail(text)}
                            />
                        </View>
                        <View style={styles.wrapperInput}>
                            <TextInput
                              style={styles.input}
                              placeholder="Password"
                              value={password}
                              secureTextEntry={true}
                              onChangeText={text => setPassword(text)}
                            />
                        </View>
                        
                          <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.text}>Login</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
              <View style={styles.bottom}>
                    
              </View>
        </ImageBackground>
      
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header:{
    flex: 1
  },
  logo:{
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  title:{
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
  },  
  loginContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  login:{
    flex: 0.9,
    width:  "90%",
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 3,
        elevation: 3,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
  },
  login2:{
    flex: 0.8,
    width:  "80%",
    justifyContent: "center"
  },  
  bottom:{
    flex: 1
  },
  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '100%',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  loginSession:{
    flex : 1,
    width: "100%",
    justifyContent: "center",
  },
  header:{
    flex: 1,
  },
  bottom:{
    flex: 1,
  }
});