import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import ApiManager from "../../api/ApiManager"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const TeacherSubject = () =>{
    const navigation = useNavigation();
    const [apiData, setApiData] = useState([])
    const [depSubject, setDepSubject] = useState([])

    const teacherSubject = () =>{
        ApiManager.get(`/teacher/subjects`).then((response)=>{
            setApiData(response.data)
        }).catch(err=>console.log(err))
    }

    const departmentSubject = () =>{
        ApiManager.get(`/teacher/departmentsubjects`).then((response)=>{
            setDepSubject(response.data)
        }).catch(err=>console.log(err))
    }
    

    useEffect(()=>{
        teacherSubject();
        departmentSubject();
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{marginTop: 5 ,padding: 5, width: 50}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>    
                            <MaterialCommunityIcons name="arrow-left" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            {
                apiData ?
                    <View style={styles.data}>
                        <Text style={{margin:10}}>Your Subjects</Text>
                        <ScrollView style={styles.scroll}>
                        {apiData.map((item,index)=>{
                            return(
                                <View style={styles.arrContainer} key={index}>
                                    <View style = {styles.info}>
                                        <Text style={{color: "white"}}>{item.description}</Text>
                                    </View>
                                </View>    
                    )
                })
            }
            </ScrollView>
                    </View>
                :null
            }
            {
                depSubject ?
                    <View style={styles.allSubContainer}>
                        <View style={styles.data}>
                        <Text style={{margin:10}}>Your Subjects</Text>
                        <ScrollView style={styles.scroll}>
                            {depSubject.map((item,index)=>{
                                return(
                                    <View style={styles.arrContainer} key={index}>
                                        <View style = {styles.info}>
                                            <Text style={{color: "white"}}>{item.description}</Text>
                                        </View>
                                    </View>    
                            )
                        })
                    }
                    </ScrollView>
                    </View>
                    </View>
                :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        flex: 0.3,
        marginTop: 50,
        backgroundColor: "#34b7f1",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 3,
        elevation: 3,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    data:{
        flex: 1
    },  
    arrContainer:{
        flexDirection: "row",
        margin: 5,
        marginBottom: 2,
        backgroundColor: "blue",
        borderRadius:15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
    },
    info:{
        flex:1.5,
        margin: 10
    },
    allSubContainer:{
        flex: 3.5
    }

    
})

export default TeacherSubject;