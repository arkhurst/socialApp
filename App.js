import React from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import * as firebase from 'firebase';
import BottomTab from './navigation/bottomTab';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import LoadingScreen from './screens/loadingScreen';
import { View } from 'react-native';


const winheight = Dimensions.get('window').height; 
const Stack = createStackNavigator();


var firebaseConfig = {
  apiKey: "AIzaSyC98Y_87xSCJnzdj_xaqDuQhgM0bzbN4Us",
  authDomain: "social-app-90a7b.firebaseapp.com",
  databaseURL: "https://social-app-90a7b.firebaseio.com",
  projectId: "social-app-90a7b",
  storageBucket: "social-app-90a7b.appspot.com",
  messagingSenderId: "699809971435",
  appId: "1:699809971435:web:f45e609d70dda450cc92ae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  return(
    <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen 
              name="Loading" 
              component={LoadingScreen} 
              options={{
                headerShown:false
                }} />
           <Stack.Screen 
              name="Home" 
              component={BottomTab} 
              options={{
              headerBackTitleVisible:false, 
              headerStyle: {
                backgroundColor:"#e9446a",
                height:winheight * 0.1,
              },
              headerTitleStyle:{
                 color:'#fff'
              },
              headerLeft: () => <View />
                 }}/>
           <Stack.Screen 
           name="Login" component={LoginScreen} options={{headerShown:false}} />
           <Stack.Screen 
              name="Register"
              component={RegisterScreen} 
              options={{
              headerShown:false,
             }} />
         </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

