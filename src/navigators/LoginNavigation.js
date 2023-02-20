import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import Teachertab from './TeacherTabs';
import TeacherInfo from '../screens//teacher/TeacherInfoScreen';
import NotificationTeacher from '../screens/teacher/TeacherNotification';
import StudentTab from './StudentTabs';
import EditProfile from '../screens/teacher/EditProfileScreen';
import StudentInfo from '../screens/teacher/StudentInfomationScreen';
import CurrentClass from '../screens/teacher/CurrentClassInfo';
import StudentJoinList from '../screens/teacher/StudentJoinList';
import JoinClass from '../screens/student/JoinClassScreen';
import ClassHistory from '../screens/teacher/ClassHistory';
import TeacherSubject from '../screens/teacher/TeacherSubject';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Information' component={TeacherInfo}/>
            <Stack.Screen name='Notification' component={NotificationTeacher}/>
            <Stack.Screen name='Teacher Home' component={Teachertab}/>
            <Stack.Screen name = 'StudentInfoList' component={StudentInfo}/>
            <Stack.Screen name='StudentHome' component={StudentTab}/>
            <Stack.Screen name = 'AfterStartClass' component={CurrentClass}/>
            <Stack.Screen name='StudentJoinDetails' component={StudentJoinList}/>
            <Stack.Screen name='JoinClass' component={JoinClass}/>
            <Stack.Screen name='History' component={ClassHistory}/>
            <Stack.Screen name='TeacherSubject' component={TeacherSubject}/>
            <Stack.Screen name='StudentInfomation' component={StudentInfo}/>
        </Stack.Navigator>
    )
    
}
export default LoginNavigator