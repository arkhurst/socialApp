import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/homeScreen';
import MessageScreen from '../screens/messageScreen';
import PostScreen from '../screens/postScreen';
import NotificationScreen from '../screens/notificationScreen';
import ProfileScreen from '../screens/profileScreen';
import { Ionicons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';
export default function BottomTabNavigator({ navigation, route }) {
 
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  
    return (
      <BottomTab.Navigator tabBarOptions={{
          activeTintColor:'tomato',
          inactiveTintColor:'#b8bbc4',
          showLabel:false
      }} initialRouteName={INITIAL_ROUTE_NAME}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            tabBarIcon: ({ focused }) => <Ionicons 
                    color={focused ? 'tomato' : '#b8bbc4'} 
                    name="ios-home" 
                    size={24}
                    />      
          
          }}
        />
         <BottomTab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: 'Message',
            tabBarIcon: ({ focused }) => <Ionicons color={focused ? 'tomato' : '#b8bbc4'} name="ios-chatboxes" size={24}  />,
            
          }}
        />
        <BottomTab.Screen
          name="Post"
          component={PostScreen}
          options={{
            title: 'Post',
            tabBarIcon: ({ tintColor }) => <Ionicons  
                    color="#e9446a" 
                    name="ios-add" 
                    size={58}
                    style={{
                    shadowColor:'#e9446a',
                    shadowOffet: { width: 0, height:0},
                    shadowRadius:10, 
                    shadowOpacity:0.3
            }}  />,
          
          }}
        />
         <BottomTab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: 'Notification',
            tabBarIcon: ({ focused }) => <Ionicons color={focused ? 'tomato' : '#b8bbc4'} name="ios-notifications" size={24}  />,
          
          }}
        />
         <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => <Ionicons color={focused ? 'tomato' : '#b8bbc4'} name="ios-person" size={24}  />,
          
          }}
        />
      </BottomTab.Navigator>
    );
  };
  
  function getHeaderTitle(route) {
    const routeName = route.state
  ?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  
    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'Message':
        return 'Messages';
      case 'Post' :
          return 'Your Posts'
      case 'Notification' :
          return 'Notifications';
      case 'Profile' :
          return 'Profile';    
            
    };
  };