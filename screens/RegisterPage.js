import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'

export default function RegisterPage(){
    return(
        
        <View style = {StyleSheet.container}>

            <ImageBackground source={require("./assets/back.jpg")} resizeMode="cover" style={styles.image1}>
                <TextInput style = {styles.input1} placeholder = 'Registration Id' />
                <TextInput style = {styles.input2} placeholder = 'Name' />
                <TextInput style = {styles.input4} placeholder= 'Enter your Password' autoCorrect={false} secureTextEntry={true} textContentType='password'></TextInput>
                <TextInput style = {styles.input3} placeholder = 'Address' />

                <TouchableOpacity style = {styles.btn}>
                    <Text style = {{color: '#ffff',fontSize:20}}>Register</Text>
                </TouchableOpacity>

            </ImageBackground>
            
        </View>
    )
}
const styles = StyleSheet.create({


    image1:{
        width: '100%',
        height: '100%',
        opacity: 0.8
    },

    input1:{
        marginTop:'40%',
        marginLeft: '10%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100,
        backgroundColor: 'white'
    },

    input2:{
        marginTop:'5%',
        marginLeft: '10%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100,
        backgroundColor: 'white'
    },

    input3:{
        marginTop:'5%',
        marginLeft: '10%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100,
        backgroundColor: 'white'
    },

    input4:{
        marginTop:'5%',
        marginLeft: '10%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100,
        backgroundColor: 'white'
    },

    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    
    btn:{
        width:'50%',
        padding: 5,
        backgroundColor:"blue",
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'5%',
        marginLeft: '26%',
        borderRadius:100
    }
});