import { useNavigation } from '@react-navigation/native'
import React, {Fragment, useEffect, useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import ApiManager from '../../api/ApiManager'
import { startClass } from '../../api/UserApi'


const handle_startClass =() =>{
    
}

const StartClassScreen = () => {
  const navigation = useNavigation();
  const [showInfo, setShowInfo] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [valueSubject, setValueSubject] = useState(0);
  const [valueSession, setValueSession] = useState(0);
  const [valueLate, setValueLate] = useState(0);
  const [valueStartTime, setValueStartTime] = useState('');
  const [valueDuration, setValueDuration] = useState(0);
  const [subject, setSubject] = useState([]);
  const [late, setLate] = useState([
    {label: '15mn', value: '15'},
    {label: '30mn', value: '30'}
  ]);
  const [session, setSession] = useState([
    {label: 'TD', value: '1'},
    {label: 'TP', value: '2'},
    {label: 'Course', value: '3'}
  ]);
  
  const handleSubject =()=>{
      ApiManager.get(`/teacher/subjects`).then((response)=>{
          setSubject(response.data)
      }).catch((error)=>console.log(error))
  };

  useEffect(()=>{
      handleSubject();
  },[])

  // useFocusEffect(()=>{
  //   React.useCallback(()=>{
  //     setSubject(subject_id)
  //   })
  // },[])

  const handleStartClass = () =>{
      startClass({
          subject_id : valueSubject,
          session_id : valueSession,
          startTime : valueStartTime,
          count_as_late_Minute : valueLate,
          duration : valueDuration
      }).then(result=>{
          if(result.status == 200){
              return(
                  navigation.navigate('AfterStartClass')
              )
          }
      }).then(
        setValueSubject(0),
        setValueSession(0),
        setValueLate(0),
        setValueDuration(0),
        setValueStartTime('')
      ).catch(error=>console.log(error))
  }
  
  return (
        <View style={styles.container}>
          <View style={styles.menu}>
            <View style={styles.menuChild}>
                <View style={styles.section1}>
                    <View style={styles.section11}><Text>Subject:</Text></View>
                    <View style={styles.section12}>
                        <DropDownPicker
                                  open={open1}
                                  value={valueSubject}
                                  items={subject.map((item)=> ({label:item.description,value:item.id}))}
                                  setOpen={setOpen1}
                                  setValue={setValueSubject}
                                  setSubject={setSubject}  
                              />
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.section11}><Text>Session type:</Text></View>
                    <View style={styles.section12}>
                        <DropDownPicker
                                open={open2}
                                value={valueSession}
                                items={session}
                                setOpen={setOpen2}
                                setValue={setValueSession}
                                setItems={setSession}
                            /> 
                    </View>
                </View>
                <View style={styles.section3}>
                    <View style={styles.section11}><Text>Count as late after:</Text></View>
                    <View style={styles.section12}>
                        <DropDownPicker
                                open={open3}
                                value={valueLate}
                                items={late}
                                setOpen={setOpen3}
                                setValue={setValueLate}
                                setItems={setLate}
                      
                            /> 
                    </View>
                </View>
                <View style={styles.section4}>
                    <View style={styles.section11}><Text>Start time</Text></View>
                    <View style={styles.section12}>
                        <TextInput placeholder='  HH:mm:ss (24-Hours format)' 
                            style={{backgroundColor: "white", width: "100%",height: 50, borderRadius: 5, borderWidth: 1 }}
                            onChangeText={setValueStartTime}
                            value={valueStartTime}
                            />
                        </View>
                </View> 
                <View style={styles.section4}>
                    <View style={styles.section11}><Text>Duration</Text></View>
                    <View style={styles.section12}>
                      <TextInput 
                          onChangeText={setValueDuration} 
                          value={valueDuration} 
                          placeholder='  Duration(Hour-ex:1,2,4...)' 
                          style={{backgroundColor: "white", width: "100%",height: 50, borderRadius: 5,borderWidth: 1}}/></View>
                </View>
            </View>
        </View>
        <View style={styles.description}>
        <Text style={{padding:12, alignSelf: "flex-start",fontWeight:'500'}}>Description:</Text>
            <View style={styles.descriptionChild}>
              
                <TextInput style = {{ backgroundColor: "#C0C0C0",padding: 10,width:"95%", height:"78%", textAlignVertical: 'top', paddingTop: 10 }} placeholder='Description!'/>
              </View>
            </View>
          <View style={styles.submit}>
            <Button title='Create Class' color={"blue"} onPress={handleStartClass}></Button>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  menu:{
    flex:3,
    justifyContent: "center",
    alignItems:"center"
  },
  menuChild:{
    justifyContent: 'center',
    alignItems:'center',
    width:"95%",
    height:"95%",
    backgroundColor:"#34b7f1",
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  dropLabel:{
      justifyContent: "center",
      alignItems: "center"
  },
  description:{
    flex:1.5,

    justifyContent: "center",
    alignItems:"center"
  },
  descriptionChild:{
    flex:1,
    width:"95%",
    height:"95%",
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  submit:{
    flex: 0.5,
    justifyContent: "center",
    alignItems:'flex-end',
    paddingRight: 10
  },
  section1:{
    flex:1,
    flexDirection:"row",
    width: "93%",
    marginTop:15,
    zIndex : 3000
  },
  section2:{
    flex:1,
    flexDirection:"row",
    width: "93%",
    zIndex : 2500
  },
  section3:{
    flex:1,
    width: "93%",
    flexDirection:"row",
    zIndex : 1500
  },
  section4:{
    flex: 1,
    width: "93%",
    flexDirection:"row",
    zIndex : 1000
  },
  section5:{
    flex:1,
    flexDirection:"row",
    width: "93%",
    marginBottom: 15,
    zIndex : 500
  },  
  section11:{
    flex:0.8,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  section12:{
    flex:1,
    marginBottom: 15,
    justifyContent:"center",
    alignItems: "center",
  }
})
export default StartClassScreen