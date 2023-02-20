import { Text, TouchableOpacity, View, Image } from "react-native"
import { StyleSheet } from "react-native"

const TeacherTasks = () =>{
    return(
        <View style={styles.container}>
            <Text style={{padding: 10, fontWeight:"500", color:"blue"}}>More Options:</Text>
            <View style={styles.option}>
                <TouchableOpacity>
                    <View style={styles.optionComponent}>
                        <Image
                        style = {{width:30, height: 30, marginLeft:13, marginTop: 5}} 
                        source={require('../assets/history.png')}></Image>
                        <Text style={{textAlign: "center"}}>Class Histoy</Text>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent: "space-between"}}>
                    <View style={styles.optionComponent}>
                        <Image
                        style = {{width:30, height: 30, marginLeft:20, marginTop: 10}} 
                        source={require('../assets/studentinfo.png')}></Image>
                        <Text style={{textAlign: "center"}}>Student Information</Text>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.optionComponent}>
                        <Image
                        style = {{width:30, height: 30, marginLeft:17, marginTop: 10}} 
                        source={require('../assets/Report.png')}></Image>
                        <Text style={{textAlign: "center"}}>Report</Text>
                    </View> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '98%',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 5,
        
    },
    option:{
        marginTop:10,
        backgroundColor: 'blue',
        width: '100%',
        marginBottom: 10
    },
    optionComponent:{
        alignSelf: "center",width:"90%", marginTop: 10,backgroundColor:"#fff",
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 5,
    }
})
export default TeacherTasks