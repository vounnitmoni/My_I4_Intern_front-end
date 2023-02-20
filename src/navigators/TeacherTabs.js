import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import ReportScreen from "../screens/teacher/ReportScreen";
import StartClassScreen from "../screens/teacher/StartClassScreen";
import TeacherHomeScreen from "../screens/teacher/TeacherHomeScreen";
import {Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingScreen from "../screens/teacher/SettingScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Teachertab = () =>{
    const navigation = useNavigation()
    return(
        <Tab.Navigator
                initialRouteName="THome"
                screenOptions={()=>({
                    headerLeft: ()=> (
                        <TouchableOpacity style={{paddingLeft:10}} onPress={()=> navigation.navigate('Information')}>
                            <Image source={require('../assets/user.png')}style = {{width: 40, height: 40, borderRadius: 40/2}}/>
                        </TouchableOpacity>
                    ),
                    headerRight: ()=> (
                        <TouchableOpacity style={{paddingRight:10}} onPress={()=> navigation.navigate('Notification') }>
                            <Image source={require('../assets/notification-bell.png')} style = {{width: 40, height: 40, borderRadius: 40/2}}/>
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                })}
                
            >           
            <Tab.Screen 
                name ="Home" 
                component={TeacherHomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
                />
            <Tab.Screen 
                name ="StartClass" 
                component={StartClassScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                    ),
                }}/>
            <Tab.Screen 
                name ="Report" 
                component={ReportScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                }}
                />
            <Tab.Screen 
                name="Setting"
                component={SettingScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="cog" color={color} size={size} />
                    ),
                    headerShown: false
                }}
                />
        </Tab.Navigator>
    )
}

export default Teachertab