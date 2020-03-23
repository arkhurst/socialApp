import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, StatusBar, LayoutAnimation } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';



const LoginScreen = ({navigation}) => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage,setErrorMessage] = useState(null);
    const [showLoading, setShowLoading] = useState(undefined)
    
     const handleLogin = () => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false)
            firebase
            .auth()
           .signInWithEmailAndPassword(email, password)
           .catch (error => setErrorMessage(error.message))
        }, 3000)
         
    }

    return(
        <View style={styles.container}>
         
            <Text style={styles.greeting}>{"Hello Again. \nWelcome Back"}</Text>
             <View style={styles.errorMessage}>
                {errorMessage && 
                    <Text style={styles.error}>{errorMessage}</Text>
                    }
            </View> 
            {/* Form */}
            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput  
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={email => setEmail(email)}
                        value={email}
                        ></TextInput>
                </View>
                <View style={{marginTop:32}}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        secureTextEntry 
                        autoCapitalize="none"
                        onChangeText={password => setPassword(password)}
                        value={password}
                        ></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() =>handleLogin()}>
                <Text style={{fontWeight:'bold', color:'#fff'}}>Sign in</Text>
            </TouchableOpacity>
            {showLoading ? (
                <ActivityIndicator size="large" style={{marginTop:10}}></ActivityIndicator>
            ) : (
               null
            )}

            <TouchableOpacity style={styles.new} onPress={() => navigation.navigate('Register')} >
                <Text style={{color:'#414959', fontSize:13}}>New to SociaLite?
                    <Text style={{fontWeight:'500', color:'#e9446a'}}>{""}Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:90
    
    },
    greeting:{
        marginTop:32,
        fontSize:18,
        fontWeight:'500',
        textAlign:'center'
    },
    errorMessage:{
        height:72,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:30
    },
    error:{
      color:'#e9446a',
      fontSize:13,
      fontWeight:'600',
      textAlign:'center'
    },
    form:{
        marginBottom:48,
        marginHorizontal:30,
        marginTop:20
    },
    inputTitle:{
        color:'#8a8f9e',
        fontSize:13,
        textTransform:'uppercase'
    },
    input:{
        borderBottomColor:'#8a8f9e',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:'#161f3d'
    },
    button:{
        marginHorizontal:30,
        backgroundColor:'#e9446a',
        borderRadius:4,
        height:52,
        alignItems:'center',
        justifyContent:'center'
    },
    new:{
        marginTop:32,
        alignSelf:'center'
    }
})
export default LoginScreen;