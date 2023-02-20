import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ApiManager from "../../api/ApiManager";
const StudentJoinList = () =>{
    const navigation = useNavigation()
    const [student, setStudent] = useState([])
    useEffect(()=>{
        const result = async ()=>{
            const request = await ApiManager.get(`/teacher/classdetails`)
            setStudent(request.data)
        }
        result();
        console.log(student)
    },[])

    return(
        <View style = {styles.container1}>
           <View style={styles.header}>
                <View style={{padding: 11, width: 50}}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>    
                            <MaterialCommunityIcons name="arrow-left" size={30}/>
                    </TouchableOpacity>
                </View>    
            </View>
            {/* <ScrollView style={styles.scroll}>
                    {
                      student.map((item, index)=>{
                        return(
                          <View key={index}>
                            <Text>ID: {item.student.id}</Text>
                            <Text>Name: {item.student.fullname}</Text>
                            <Text>Status: {item.status.status}</Text>
                            <Text>Join Time: {item.joinTime}</Text>
                        </View>
                        )
                      })
                    }
                        
            </ScrollView> */}
            {
                student ?
                        <View style={styles.data}>
                        <Text style={{margin:10}}>Student Who did join</Text>
                        <ScrollView style={styles.scroll}>
                            {student.map((item,index)=>{
                                return(
                                    <View style={styles.arrContainer} key={index}>
                                        <View style={styles.textWrapper}>
                                          <Text style={styles.text}>ID: {item.student.id}</Text>
                                          <Text style={styles.text}>Name: {item.student.fullname}</Text>
                                          <Text style={styles.text}>Status: {item.status.status}</Text>
                                          <Text style={styles.text}>Join Time: {item.joinTime}</Text>
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
    container1:{
        flex: 1,
    },
    scroll:{
        flex: 4,
        backgroundColor: "#D9D9D9"
    },
    header:{
        flex: 0.08,
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
    arrContainer:{
      flexDirection: "column",
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
  data:{
    flex: 1
  }, 
  text:{
    color: "white",
    fontSize: 15
  },
  textWrapper:{
      flex: 1,
      margin: 10
  }

})

export default StudentJoinList