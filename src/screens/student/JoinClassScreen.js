import react, {useEffect, useState, Fragment} from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner";
import ApiManager from "../../api/ApiManager";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { result } from "lodash";

const JoinClass=()=>{
    const navigation = useNavigation()
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scanResult, setScanResult] = useState(false);
    const [student_id, setStudentId] = useState('')
    const [classroom_id, setClassroomId] = useState(null)
    const [urlData, setUrlData] = useState('')
    const [studentSameId, setStudentSameID] = useState('')

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
        studentInfo();
        classroom();
        getBarCodeScannerPermissions();
    }, []);
    const studentInfo = () =>{
        ApiManager.get(`/student/studentinfo`).then((response)=>{
            setStudentId(response.data.id)
        }).catch(err=>console.log(err))
    }
    const classroom = () =>{
        ApiManager.get(`/student/popupclass`).then((response)=>{
            setClassroomId(response.data.id)
        }).catch(err=>console.log(err))
    }
    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setUrlData(data);
        if(studentSameId == student_id){
            alert('You have already joined!')
        }else(
            showAlert()
        )
        
    };
    const showAlert = ()=>{
        Alert.alert(
            'Classroom',
            'Do you want to join this class',
            [
                {
                    text: "Join",
                    onPress: ()=> {joinClass()},
                    styles: "ok"
                },
                {
                    text: "Cancel",
                    onPress: ()=> {console.log("Joining class has been canceled!"), setScanned(false)},
                    styles: "cancel"
                }
                
            ], 
            {cancelable: true}
        )
    }
    const joinClass = async () =>{
        try {
            const result = await axios(urlData,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                data: {
                    student_id : student_id,
                    classroom_id : classroom_id
                }
            }).then(result=>{
                if(result.status == 200){
                    alert('You have successfully joined the class!')
                    setStudentSameID(student_id);
                }else(
                    alert('Opps, There is an error')
                )
            }).catch(err=>console.log(err))
            return result
        } catch (error) {
            return error.response.data
        }
    }
    

    // const onSuccess = () =>{
    //     this.setState({
    //         scanResult: true
    //     })
    //     ApiManager.post(urlData,{
    //         student_id : e20181250,
    //         classroom_id : 99
    //     })
    //     .then((response) => {
    //         console.log(response)
    //     }).catch((error)=>{
    //         console.log(error);
    //     })
    // }

    const scanAgain = () => {
        this.setState({
            scanned: true,
            scanResult: false
        })
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return(
        <View style={styles.container}>
            {!scanResult && <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />}
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }

})
export default JoinClass