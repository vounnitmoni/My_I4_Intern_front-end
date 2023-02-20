import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ApiManager from '../../api/ApiManager';


const TeacherInfo = () => {
  const navigation = useNavigation()
  const [info, setInfo] = useState(null)
  const logoutHandler= async () =>{
      const result = await ApiManager.post(`/auth/signout`)
        .then(result => {
          if (result.status == 200) {
            AsyncStorage.removeItem('AccessToken');
            navigation.navigate('Login')
          }
        })
        .catch(err => {
          console.error(err);
        })
    }

    const result = async ()=>{
      ApiManager.get(`/teacher/teacherinfo`).then((response)=>{
          setInfo(response.data)
      }).catch(err=>console.log(err))
      
    }
  
    useEffect(()=>{
        result()
    },[])
  return (
        <View style={styles.container}>
            <View style={styles.header}>
                    <TouchableOpacity onPress={()=> {navigation.goBack()}}>
                      <MaterialCommunityIcons name="arrow-left" size={25}/>
                    </TouchableOpacity>
                    <Text style={{paddingLeft:27,fontSize:20, fontWeight: '500'}}>Profile</Text>
                    <TouchableOpacity onPress={logoutHandler}>
                      <Text style={{fontSize: 15,color:"red", fontWeight:'500'}}>Log Out</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <View style={styles.profilePic}>
                    <View style={styles.profilePic2}><Image source={require('../../assets/user.png')} style={{backgroundColor:"blue",width:150,height:150, borderRadius: 150/2}}/></View>
                </View>
            {
              info ? 
                  <View style={styles.profileName}>
                    <Text style={{fontSize: 20, fontWeight: '500', marginTop:25, color: "white"}}>{info.fullname}</Text>
                      <TouchableOpacity onPress={()=>{navigation.navigate('Edit Profile')}}>
                        <Text style={{textAlign:"center", color:"blue"}}>Edit your profile</Text>
                      </TouchableOpacity>
                </View>
              :null
            }
                
            </View>
            {
              info ?
                <View style={styles.profileInfo}>
                    <View style={styles.textWrapper}>
                      <Text style={styles.text}>Email: {info.user.email}</Text>
                      <Text style={styles.text}>Teach Year: {info.teachYear.year}</Text>
                      <Text style={styles.text}>Depatment: {info.department.department}</Text>
                    </View>
                </View>
              :null
            }
            <View style={styles.options}>
                <View style={styles.optionsWrapper}>
                    <TouchableOpacity style={styles.touchable}>
                        <View style={styles.touch}>
                              <View style={styles.optionsText}>
                                  <Text style={styles.textstyle}>Account</Text>
                              </View>
                              <View style={styles.arrow}>
                                  <MaterialCommunityIcons name="arrow-right" size={20}/>
                              </View>
                        </View>
                    </TouchableOpacity>   
                </View>

                <View style={styles.optionsWrapper}>
                    <TouchableOpacity style={styles.touchable}>
                        <View style={styles.touch}>
                              <View style={styles.optionsText}>
                                    <Text style={styles.textstyle}>Notifcation</Text>
                              </View>
                              <View style={styles.arrow}>
                                  <MaterialCommunityIcons name="arrow-right" size={20}/>
                              </View>
                        </View>
                    </TouchableOpacity>   
                </View>

                <View style={styles.optionsWrapper}>
                    <TouchableOpacity style={styles.touchable}>
                        <View style={styles.touch}>
                              <View style={styles.optionsText}>
                                  <Text style={styles.textstyle}>Verification</Text>
                              </View>
                              <View style={styles.arrow}>
                                  <MaterialCommunityIcons name="arrow-right" size={20}/>
                              </View>
                        </View>
                    </TouchableOpacity>   
                </View>

                <View style={styles.optionsWrapper}>
                    <TouchableOpacity style={styles.touchable}>
                        <View style={styles.touch}>
                              <View style={styles.optionsText}>
                                <Text style={styles.textstyle}>Help</Text>
                              </View>
                              <View style={styles.arrow}>
                                  <MaterialCommunityIcons name="arrow-right" size={20}/>
                              </View>
                        </View>
                    </TouchableOpacity>   
                </View>

                <View style={styles.optionsWrapper}>
                    <TouchableOpacity style={styles.touchable}>
                        <View style={styles.touch}>
                              <View style={styles.optionsText}>
                                  <Text style={styles.textstyle}>About us</Text>
                              </View>
                              <View style={styles.arrow}>
                                  <MaterialCommunityIcons name="arrow-right" size={25}/>
                              </View>
                        </View>
                    </TouchableOpacity>   
                </View>
            </View>
        </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#D9D9D9",
  },
  header:{
    flex:0.3,
    alignItems: "center",
    flexDirection: 'row',
    marginLeft: 15,
    marginRight:15,
    marginTop:30,
    justifyContent:"space-between",
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  profile:{
    flex:1.5,
    backgroundColor: "purple",
    alignItems:"center",
    justifyContent:"center",
    borderBottomWidth: 2,
  },
  profilePic:{
    flex:1,
    width: "50%",
    marginTop:60,
    alignItems:"center",
    justifyContent: "center" ,
  },
  profilePic2:{
    backgroundColor:"blue",
    width:150,
    height:150, 
    borderRadius: 150/2
  },
  profileName:{
    flex: 1.5,
    marginTop: 25
  },

  profileInfo:{
    flex:0.9,
    margin: 5
  },
  text:{
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: '400'
  },
  textWrapper:{
    flex:1,
    justifyContent:"center",
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  options:{
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  optionsWrapper:{
    flex: 1,
    width: "97%",
  },
  touch:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 10
  },  
  optionsText:{
    flex: 3,
  },
  arrow:{
    flex: 0.2,
  },
  touchable:{
    flex: 1, marginBottom: 5,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  textstyle:{
    fontSize: 18,
    fontWeight: '500'
  }
  
})
export default TeacherInfo