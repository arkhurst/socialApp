import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Lottie from 'lottie-react-native';
import * as loading from '../assets/51-preloader.json';
import * as firebase from 'firebase';

const LoadingScreen = ( {navigation} ) => {

    useEffect(() => {
       firebase.auth().onAuthStateChanged( user => {
           navigation.navigate(user ? "Home" : "Login")
       })
    }, [])

  
    return(
        <View style={styles.container}>
            <Text>Loading...</Text>
            <Lottie source={loading} autoPlay loop autoPlay style={{width:120, height:120}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default LoadingScreen;