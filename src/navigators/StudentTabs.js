import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import {Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingScreen from "../screens/teacher/SettingScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StudentHome from "../screens/student/StudentHome";
import JoinClassScreen from "../screens/student/JoinClassScreen";

const Tab = createBottomTabNavigator();
const StudentTabs = () =>{
    const navigation = useNavigation()
    return(
        <Tab.Navigator
                initialRouteName="Home"
                screenOptions={()=>({
                    headerLeft: ()=> (
                        <TouchableOpacity style={{paddingLeft:10}} onPress={()=> navigation.navigate('StudentInfomation')}>
                            <Image source={require('../assets/user.png')} style = {{width: 40, height: 40, borderRadius: 40/2}}/>
                        </TouchableOpacity>
                    ),
                    headerRight: ()=> (
                        <TouchableOpacity style={{paddingRight:10}} onPress={()=> navigation.navigate('Notification') }>
                            <Image source={require('../assets/notification-bell.png')} style = {{width: 40, height: 40, borderRadius: 40/2}}/>
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center'
                })}
            >           
            <Tab.Screen 
                name ="Home" 
                component={StudentHome}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
                />
            <Tab.Screen 
                name ="Join Class" 
                component={JoinClassScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
                    ),
                }}
                />
            <Tab.Screen 
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarIcon:({color, size})=>(
                        <MaterialCommunityIcons name="cog" color={color} size={size}/>
                    )
                }}
                />
        </Tab.Navigator>
    )
}

export default StudentTabs