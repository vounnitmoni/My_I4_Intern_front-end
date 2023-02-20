import { StyleSheet } from 'react-native'
import {Image, Button,View, Text} from 'react-native'
const Currentclass = () =>{
    return(
        <View style = {styles.currentClass}>
          <View style = {styles.classAllInfo}>
              <View style = {styles.classInfo}>
                  <Text>Department : GIC</Text>
                  <Text>Academic Year: I4</Text>
                  <Text>Subject: Computer Architecture</Text>
                  <Text>Session Type: TP</Text>
                  <Text>Start Time: 3:00pm to 5:00pm</Text>
                  <Text>Date: 10/Aug/2022</Text>
              </View>
              <View styles = {styles.qrImage}>
                  <Image
                  style = {{width:160, height: 150}} 
                  source={require('../assets/qr-code-bc94057f452f4806af70fd34540f72ad.png')}></Image>
              </View>
          </View>
          <View style = {styles.classButton}>
              <View style = {{flexDirection: 'row', padding: 10, alignSelf: 'center'}}>
                  <Button color="blue" title='Join Class'/>
              </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    currentClass : {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '98%', 
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 5,
      },
      classInfo:{
        padding: 10
      },
      classAllInfo : {
        flexDirection: 'row',
          
      },
      qrImage: {
        
      },
      classButton: {
      },
})
export default Currentclass