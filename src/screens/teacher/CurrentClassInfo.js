import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import ApiManager, { baseURL } from "../../api/ApiManager"
import QRCode from "react-native-qrcode-svg"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
// export const goHome = () =>{
//     const [data, setData] = useState(null)
//     ApiManager.get(`/teacher/currentclassdetail`).then((response)=>{
//         setData(response.data)
//     })
// }

const CurrentClass = () => {
    const navigation = useNavigation();
    const [apiData, setApiData] = useState(null)
    const [id, setId] = useState(0)
    
    const url = baseURL + "/student/joinclass/" + id;
    const getInstanceClassId = () =>{
        ApiManager.get(`/teacher/currentclassdetail`,{
            headers:{
                'Cache-Control': 'no-cache'
            }
        }).then((response)=>{
            setId(response.data.id)
        }).catch((error)=>console.log(error))
    }
    
    
    const getClassInfo = () => {
        ApiManager.get(`/teacher/currentclassdetail`).then((response)=>{
            setApiData(response.data)
        })
        .catch((error)=>console.log(error))
    }
    
    
    useEffect(()=>{
            getClassInfo()
            getInstanceClassId()
        
        console.log(apiData)
    },[])
    
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{padding: 10, width: 50}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>    
                            <MaterialCommunityIcons name="arrow-left" size={30}/>
                    </TouchableOpacity>
                </View>   
            </View>
            <View style={styles.qr}>
            {
            id ?
                <View style={styles.qrContainer}>
                    <View style={styles.qrTitle}>

                    </View>
                <View style={styles.qrImage}>
                    <QRCode 
                        value={url}
                        size={300}
                        color="black"
                        backgroundColor="white"
                        logoBackgroundColor='transparent'
                    />
                </View>
                </View>
            :null
        }    
            </View>
            {apiData ?
                <View style={styles.info}>
                    <View style={{flex: 1, margin: 10}}>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>Department: </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.department.department}</Text></View>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>Subject: </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.subject.subject}</Text></View>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>Academic Year: </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.subject.year.year}</Text></View>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>Session: </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.sessiontype.sessiontype}</Text></View>
                    </View>
                    <View style={{flex: 1, margin: 10}}>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>Date : </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.date}</Text></View>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>Start Time: </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.startTime}</Text></View>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>End Time: </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.endTime}</Text></View>
                        <View style={styles.textstyle}><Text style={{fontSize: 16, fontWeight: "500"}}>Late after: </Text><Text style={{fontSize: 16, fontWeight: "500"}}>{apiData.count_as_late_after}</Text></View>
                    </View>
                </View>
            :null}
            <View style={styles.saveButton}>
                    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1, 
        backgroundColor: "#D9D9D9",
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
    info:{
       flex: 1,
       backgroundColor: "#34b7f1",
       margin: 20,
       flexDirection: "row",
       shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 3,
        elevation: 3,
        borderRadius: 15
    },
    qr:{
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center"
    },
    textstyle:{
        flexDirection:'row', flexWrap:'wrap', marginBottom: 10,
    },
    qrContainer:{
        
    },
    qrImage:{
        flex:1, 
          
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
    },
    saveButton:{
        flex: 1
    }
})
export default CurrentClass;