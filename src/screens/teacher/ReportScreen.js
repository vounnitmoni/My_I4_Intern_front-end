import React, {useState} from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-modern-datepicker';

const ReportScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <View style={styles.container}>
        <View style={{flex: 0.2,width: "95%",justifyContent: "space-between", flexDirection:"row", margin: 10, alignItems: "flex-end"}}>
            <Text style={{alignSelf: "center", fontWeight: "500"}}>Options:</Text>
            <Button title='export as Excel'/>
        </View>
        <View style={styles.option}>
          
        </View>
        <View style={styles.form}>
          <ScrollView>
              <Text style={{fontSize: 20}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
              a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
              The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </Text>
          </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  option:{
    flex:0.5,
    width: "95%",
    backgroundColor:"#BBD9E5",
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  form:{
    marginTop:10,
    flex:2.5,
    width:"100%",
    backgroundColor: "#fff",
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  }
})
export default ReportScreen