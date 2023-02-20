import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native"
import ApiManager from "../../api/ApiManager"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

const ClassHistory = () =>{
    const navigation = useNavigation();
    const [apiData, setApiData] = useState([])
    const [index, setIndex] = useState(null)
    const [classId, setClassId] = useState(null)
    const findClassId = ()=>{
        {apiData.forEach((item, index)=>{
            setClassId(item.id)
        })}
    }

    const historyData = () =>{
        ApiManager.get(`/teacher/classhistory`).then((response)=>{
            setApiData(response.data)
        }).catch(err=>console.log(err))
    }

    useEffect(()=>{
        historyData();
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{padding: 10, width: 50}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>    
                            <MaterialCommunityIcons name="arrow-left" size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
            {
                apiData ?
                    <View style={styles.data}>
                        <ScrollView style={styles.scroll}>
                            {apiData.map((item,index)=>{
                            return(
                                <View style={styles.arrContainer} key={index}>
                                    <View style = {styles.info}>
                                        <Text style={styles.text}>ID: {item.id}</Text>
                                        <Text style={styles.text}>Subject: {item.subject.description}</Text>
                                        <Text style={styles.text}>Year: {item.subject.year.year}</Text>
                                        <Text style={styles.text}>Session: {item.sessiontype.sessiontype}</Text>
                                        <Text style={styles.text}>Date: {item.date}</Text>
                                    </View>
                                    <View style={{padding: 10, width: 50, justifyContent: "center"}}>
                                        <TouchableOpacity onPress={()=>{setIndex(index)}}>    
                                            <MaterialCommunityIcons color={"white"} name="arrow-right" size={30}/>
                                        </TouchableOpacity>
                                    </View>  
                                </View>    
                            )
            })
            }
            </ScrollView>
                    </View>
                :null
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#D9D9D9"
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
        flex: 4
    },
    scroll:{

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
    details:{

    },
    text:{
        color: "white"
    }
})

export default ClassHistory;