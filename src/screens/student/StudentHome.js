import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ApiManager from "../../api/ApiManager";
import { useFocusEffect } from "@react-navigation/native";
const StudentHome = () =>{
    const navigation = useNavigation()
    const [infoData, setInfoData] = useState(null)
    const [apiData, setApiData] = useState(null)
    const [isExist, setIsExist] = useState(true)

    const studentInfo = () =>{
        ApiManager.get(`/student/studentinfo`).then((response)=>{
            setInfoData(response.data)
        }).catch(err=>console.log(err))
    }
    const result = ()=>{
        ApiManager.get(`/student/popupclass`, {
            headers:{
                'Cache-Control': 'no-cache'
            }
        }).then((response)=>{
            setApiData(response.data)
            
        }).catch(err => console.log(err))
    }
    useFocusEffect(
        React.useCallback(()=>{
            result()
        },[])
    )

    useEffect(()=>{ 
        studentInfo();
    },[])
    return(
        <View style={styles.container}>
          {
              infoData ? <View style={styles.welcome}>
              <Text style={{fontSize: 20, marginLeft: 10, color: "white"}}>Welcome, {infoData.fullname}</Text>
              <Text style={{marginLeft: 10, color: "white"}}>Here is your dashboard</Text>
          </View> :null
          }
            <View style={styles.wholeWrapper}>
                {/* <Currentclass/> */}
               
                 
              {apiData ?
                   <View style={styles.currentClassContainer}>
                       <View style={styles.currentClass}> 
                          <View style={{flex: 1, flexDirection: "column"}}>
                              <View style={styles.info}>
                                  <View style={{flex: 1, justifyContent: "center", alignItems: "flex-start", marginLeft: 25}}>
                                      <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>Department: </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.department.department}</Text></View>
                                      <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>Subject: </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.subject.subject}</Text></View>
                                      <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>Academic Year: </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.subject.year.year}</Text></View>
                                      <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>Session: </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.sessiontype.sessiontype}</Text></View>
                                  </View>
                              <View style={{flex: 1.2, alignItems: "flex-start", justifyContent: "center", marginLeft: 10}}>
                                  <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>Date : </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.date}</Text></View>
                                  <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>Start Time: </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.startTime}</Text></View>
                                  <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>End Time: </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.endTime}</Text></View>
                                  <View style={styles.textstyle}><Text style={{fontSize: 15, fontWeight: "500"}}>Late after: </Text><Text style={{fontSize: 15, fontWeight: "500"}}>{apiData.count_as_late_after}</Text></View>
                              </View>
                          </View>
                          <View style={styles.button}>
                              <View style={{ flex:2,backgroundColor: "white", justifyContent: 'center', alignItems: "center", backgroundColor: "#34b7f1"}}>
                                  <Button title='Join class' color={"purple"} onPress={()=> navigation.navigate('Join Class')}></Button>
                              </View>
                          </View>   
                      </View>
                      </View>
                      </View>
                      :null}
                  {
                      apiData == '' && <View style={{alignItems: "center" , flex: 0.2, justifyContent:'center'}}>
                      <Text style={{fontSize: 15, fontWeight: "400", opacity:0.7}}>Seem there is no classroom right now:/</Text>
                      <Text style={{fontSize: 15, fontWeight: "400", opacity: 0.7}}>You did not start a class yet!</Text>
                      <MaterialCommunityIcons name="clipboard-off-outline" size={30} style={{opacity: 0.7}}/>
                  </View>
                  }
                <View style={styles.task}>
                    <Text style={{alignSelf:"flex-start", margin: 10,fontWeight: "500", opacity: 0.7}}>More Functions: </Text>
                    <View style={styles.taskWrapper}>
                        <View style={styles.taskWrapperFunction}>
                            <View style={styles.taskFunction}>
                                <View style={styles.coreTask}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('StudentInfoList') }>
                                        <View style={styles.logo}>
                                            <MaterialCommunityIcons name="account-group" size={50}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.taskTitle}>
                                    <Text style={{textAlign: "center"}}>Information</Text>
                                </View>
                            </View>
                            <View style={styles.taskFunction}>
                                <View style={styles.coreTask}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Information')}>
                                        <View style={styles.logo}>
                                            <MaterialCommunityIcons name="clock-check-outline" size={50}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.taskTitle}>
                                    <Text style={{alignSelf: "center"}}>Join History</Text>
                                </View>
                            </View>
                            <View style={styles.taskFunction}>
                                <View style={styles.coreTask}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Information')}>
                                        <View style={styles.logo}>
                                            <MaterialCommunityIcons name="book" size={50}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.taskTitle}>
                                    <Text style={{alignSelf: "center"}}>Subjects</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.taskWrapperFunction}>
                            <View style={styles.taskFunction}>
                                <View style={styles.coreTask}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Information')}>
                                        <View style={styles.logo}>
                                            <MaterialCommunityIcons name="application-braces" size={50}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.taskTitle}>
                                    <Text style={{alignSelf: "center"}}>Schedule</Text>
                                </View>
                            </View>
                            <View style={styles.taskFunction}>
                                <View style={styles.coreTask}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Information')}>
                                        <View style={styles.logo}>
                                            <MaterialCommunityIcons name="calendar-month-outline" size={50}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.taskTitle}>
                                    <Text style={{alignSelf: "center"}}>Calender</Text>
                                </View>
                            </View>
                            <View style={styles.taskFunction}>
                                <View style={styles.coreTask}>
                                    <TouchableOpacity onPress={()=> navigation.navigate('Information')}>
                                        <View style={styles.logo}>
                                            <MaterialCommunityIcons name="email-edit" size={50}/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.taskTitle}>
                                    <Text style={{alignSelf: "center"}}>Announcement</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
          flex: 1,
      },
      welcome:{
          flex: 0.5,
          backgroundColor: "purple",
          justifyContent: "center",
          alignItems: "flex-start",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
      },
      wholeWrapper:{
          flex: 4,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
      },
      task:{
          flex:1,
          width: "95%",
          justifyContent: "flex-start",
          alignItems: "center",
      },
      taskWrapper:{
          height: 300,
          width: "95%",
          marginTop: 10,
      },
      taskWrapperFunction:{
          flex: 0.5,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection:"row",
      },
      taskFunction:{
          width: "30%",
          height: "90%",
          backgroundColor: "white",
          borderRadius:15,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 3,
      },
      coreTask:{
          flex: 3,
          justifyContent: "center",
          alignItems: "center"
      },
      taskTitle:{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
      },
      logo:{
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
          backgroundColor: "#BBD9E5",
          borderRadius: 100/2,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 2,
          shadowRadius: 3,
          elevation: 3,
      },
    
    
      currentClassContainer:{
          flex: 0.75,
          flexDirection: "row",
          justifyContent:"center",
          alignItems: "center",
      },
      currentClass:{
          flex: 1,
          width: "95%",
          height: "95%",
          margin: 10,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 2,
          shadowRadius: 3,
          elevation: 3,
          borderRadius: 15,
          flexDirection: 'column',
          backgroundColor: "#34b7f1"
        },
        information:{
          flex: 1,
          
        },
        image:{
          flex: 2,
          backgroundColor: "red"
        },
        centerimage:{
            width: "100%",
            height: 175,
            backgroundColor: "blue"
        },
        info:{
            flex: 1.58,
            margin: 10,
            flexDirection: "row",
            borderRadius: 10,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 2,
            shadowRadius: 3,
            elevation: 3,
            backgroundColor: "white",
         },
         textstyle:{
             flexDirection:'row', flexWrap:'wrap', marginBottom: 10,
         },
         button:{
            flex: 0.5,
            flexDirection: 'row',   
         }
      
    })
    
export default StudentHome