import React, {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import ApiManager from "../../api/ApiManager";
import axios from "axios";



const SettingScreen = () =>{
    const navigation = useNavigation();
    const [APIdata, setAPIData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    // const GetInfo = async ()=>{
    //     const result = await ApiManager.get(`/teacher/teacherinfo`).catch(error=>console.log(error))
    //     return result;
    // }
    // useEffect(()=>{
    //     GetInfo();
    // },[])
    useEffect(()=>{
        const result = async ()=>{
            const request = await ApiManager.get(`/teacher/teacherinfo`)
            setAPIData(request.data)
            return request
        }
        result();
    },[])
    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.settingTitle}><Text style={styles.title}>Settings</Text></View>
                <View style={styles.profile}>
                    <View style={styles.profilePhoto}>

                    </View>
                    <View style={styles.profileName}>
                        <Text style={{fontSize:18}}>Vou Nitmoni</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Information')}}>
                            <Text style={{color:"blue"}}>Go to your profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.openButton}>

                    </View>
                </View>
            </View>
                <View style={styles.todoList}>
                    
                        {APIdata ?
                            <View style={styles.information}>
                                <View style={{justifyContent: "space-between"}}>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', marginBottom: 15}}>
                                        <Text style={styles.textstyle}>Username :                   </Text><Text style={styles.textdata}>{APIdata.fullname}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap', marginBottom: 15}}>
                                        <Text style={styles.textstyle}>Email:                             </Text><Text style={styles.textdata}>{APIdata.user.email}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap',marginBottom: 15}}>
                                        <Text style={styles.textstyle}>Department:                 </Text><Text style={styles.textdata}>{APIdata.department.department}</Text>
                                    </View>
                                    <View style={{flexDirection:'row', flexWrap:'wrap',marginBottom: 15}}>
                                        <Text style={styles.textstyle}>Teaching:                      </Text><Text style={styles.textdata}>{APIdata.teachYear.year}</Text>
                                    </View>
                                </View>
                            </View>
                        :null}
                </View>
            </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "column"
    },
    profileContainer:{
        flex:1,
        backgroundColor: "red",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    todoList:{
        flex:4
    },
    settingTitle:{
        flex:1.5
    },
    title:{
        fontSize:25, fontWeight:"500", padding:15
    },
    profile:{
        flex:2, backgroundColor: "green", borderBottomLeftRadius: 20,borderBottomRightRadius: 20,
        flexDirection: "row"
    },
    profilePhoto:{
        flex:0.5,
        backgroundColor:"yellow"
    },
    profileName:{
        flex: 1,
        justifyContent: "center"
    },
    openButton:{
        flex: 0.5,
        backgroundColor:"yellow"
    },
    information:{
        flex: 1,
        margin: 10
    },
    textstyle: {
        fontSize: 16,
        fontWeight: "500"
    },
    textdata:{
        fontSize: 16,
        fontWeight: "500",
        borderBottomWidth: 1
    }

})
export default SettingScreen