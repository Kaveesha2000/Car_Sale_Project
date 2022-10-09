import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Logo from "./assets/login.jpg"

export default function Login(){
    return(
        <View style = {StyleSheet.container}>

            <ImageBackground source={require("./assets/loginback.jpg")} resizeMode="cover" style={styles.image1}>
                <Image source={Logo} alt = "Login png" style = {styles.image2}/>

                <TextInput style = {styles.input1} placeholder = 'Username' />
                <TextInput style = {styles.input2} placeholder = 'Password' />

                <TouchableOpacity style = {styles.btn}>
                    <Text style = {{color: '#ffff',fontSize:20}}>Login</Text>
                </TouchableOpacity>

                <Text style = {styles.text1}>Create a new account</Text>
            </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({

    image1:{
        width: '100%',
        height: '100%'
    },

    image2:{
        width:'50%',
        marginTop: '10%',
        marginLeft: '25%',
    },

    input1:{
        marginTop:'20%',
        marginLeft : '5%',
        borderWidth: 1,
        padding: 10,
        width:'90%',
        borderRadius:100

    },

    input2:{
        marginTop:'5%',
        marginLeft : '5%',
        borderWidth: 1,
        padding: 10,
        width:'90%',
        borderRadius:100
    },

    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    
    btn:{
        width:'60%',
        padding:5,
        backgroundColor:"blue",
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'3%',
        marginLeft : '20%',
        borderRadius:100

    },

    text1:{
        color : 'blue',
        marginTop : '10%',
        marginLeft : '35%',
        textDecorationLine : 'underline'
    }
});