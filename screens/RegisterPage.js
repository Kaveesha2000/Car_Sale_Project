import React from "react";
import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity } from 'react-native'

export default function RegisterPage(){
    return(
        <View style = {StyleSheet.container}>

            <Text>Registeration</Text>

            <TextInput style = {styles.input1} placeholder = 'Registration Id' />
            <TextInput style = {styles.input2} placeholder = 'Name' />
            <TextInput style = {styles.input3} placeholder = 'Address' />
            
            <TouchableOpacity style = {styles.btn}>
                <Text style = {{color: '#ffff',fontSize:20}}>Register</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    input1:{
        marginTop:'40%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100

    },

    input2:{
        marginTop:'5%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100
    },

    input3:{
        marginTop:'5%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100
    },

    container:{
     justifyContent:'center',
     alignItems:'center'
    },
    
    btn:{
        width:'60%',
        padding:5,
        backgroundColor:"blues",
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'3%',
        borderRadius:100

    }
});