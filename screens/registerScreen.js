import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

const RegisterScreen = ({navigation}) => {

    const [name, setName ] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage,setErrorMessage] = useState(null);
    const [showLoading, setShowLoading] = useState(undefined)
    
     const handleSignUp = () => {
        setShowLoading(true)
        setTimeout(() => {
            setShowLoading(false)
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCreditials => {
                return userCreditials.user.updateProfile({
                    displayName:name,
                })
            })
            .catch( error => setErrorMessage(error.message))
        }, 3000)
        
     }

    return(
        <View style={styles.container}>
               <TouchableOpacity onPress={() => navigation.goBack()} style={{ width:32, height:32,borderRadius:16, backgroundColor:"rgba(21,22,48,0.1)", justifyContent:'center',alignItems:'center', marginLeft:20}}>
                 <Ionicons name="ios-arrow-round-back" size={32} color="#e9446a"  />
               </TouchableOpacity>
               <Text style={styles.greeting}>{"Hello... \n Sign up to get started"}</Text>
               <TouchableOpacity style={styles.avatar}>
                 <Ionicons name="ios-add" size={40} color="#fff" style={{marginTop:6,marginLeft:2}} />
               </TouchableOpacity>
             <View style={styles.errorMessage}>
                {errorMessage && 
                    <Text style={styles.error}>{errorMessage}</Text>
                    }
            </View> 
            {/* Form */}
            <View style={styles.form}>
                 <View>
                    <Text style={styles.inputTitle}>Full name</Text>
                    <TextInput  
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={name => setName(name)}
                        value={name}
                        ></TextInput>
                </View>
                <View style={{marginTop:32}}>
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
            <TouchableOpacity style={styles.button} onPress={() => handleSignUp()}>
                <Text style={{fontWeight:'bold', color:'#fff'}}>Sign in</Text>
            </TouchableOpacity>
            {showLoading ? (
                <ActivityIndicator size="large" style={{marginTop:10}}></ActivityIndicator>
            ) : (
               null
            )}

            <TouchableOpacity style={styles.new} onPress={() => navigation.navigate('Login')} >
                <Text style={{color:'#414959', fontSize:13}}>Already have an account?
                    <Text style={{fontWeight:'500', color:'#e9446a'}}>Log in</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:80,
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
        marginTop:-20
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
    },
    avatar:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#e1e2',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:160,
        marginTop:7
    }
})
export default RegisterScreen;