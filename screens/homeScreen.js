import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase';

class HomeScreen extends React.Component  {

    state = {
        email:"",
        displayName:""
    }

    componentDidMount(){
        const {email, displayName} = firebase.auth().currentUser;

        this.setState({ email, displayName})
    }
     signOut = () => {
        firebase.auth().signOut()
    }
    render(){
        LayoutAnimation.easeInEaseOut()
        return(
            <View style={styles.container}>
                <Text style={{fontWeight:'400', fontSize:19}}>Hi, {this.state.displayName}</Text>
                <TouchableOpacity style={styles.logout} onPress={this.signOut}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
 
};

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
   },
   logout:{
       marginTop:32,

   }
})
export default HomeScreen;