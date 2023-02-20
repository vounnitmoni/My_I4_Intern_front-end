import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import ApiManager from "../../api/ApiManager";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
const StudentInfo = () => {
    const navigation = useNavigation();
    const [APIdata, setAPIData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        const result = async ()=>{
            const request = await ApiManager.get(`/teacher/liststudents`)
            setAPIData(request.data)
        }
        result();
    },[])
    return(
        <View style = {styles.container}>
            <View style={styles.header}>
            <View style={{padding: 10, width: 50}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>    
                        <MaterialCommunityIcons name="arrow-left" size={30}/>
                </TouchableOpacity>
            </View>
                
            </View>
            <View style={{flex: 5}}>
            <ScrollView style={{}}>
                {APIdata.map((item,index)=>{
                return(
                    <View style={styles.arrContainer} key={index}>
                        <View style = {styles.photo}>
                            <Image source={require('../../assets/user.png')} style={{width: 50, height: 50, borderRadius: 50/2}}/>
                        </View>
                        <View style = {styles.info}>
                        <Text style={{color: "white"}}>ID: {item.id}</Text>
                        <Text style={{color: "white"}}>Name: {item.fullname}</Text>
                        <Text style={{color: "white"}}>Email: {item.user.email}</Text>
                        <Text style={{color: "white"}}>Year: {item.academicYear.year}</Text>
                    </View>
                    </View>    
                )
            })
            }
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        
    },
    arrContainer:{
        flexDirection: "row",
        margin: 5,
        marginBottom: 2,
        backgroundColor: "purple",
        borderRadius:15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
    },
    photo:{
        flex: 1,
        justifyContent: "center",
        marginLeft: 20
    },
    info:{
        flex:1.5,
        margin: 10
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
})

export default StudentInfo;