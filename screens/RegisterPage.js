import React, { useState } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button } from 'native-base'
import { Alert, StyleSheet,ImageBackground } from 'react-native';

export default function AddData({navigation}) {
    const [regId, setCarId] = useState('');
    const [name, setBrand] = useState('');
    const [password, setType] = useState('');
    const [address, setColor] = useState('');

    const saveData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                regId: regId,
                name: name,
                password: password,
                address: address
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {Alert.alert("Save Saved Successfully !")})
            .catch((err)=>{Alert.alert("Error occured !")})
    }

    return (
        <NativeBaseProvider>
            <ImageBackground source={require("./assets/back.jpg")} resizeMode="cover" style={styles.image1}>
                <Text fontSize="3xl" bold  color={"white"} underline mt="10%" ml="25%">Customer Register</Text>
                <VStack space={4} alignItems="center" mt="15%">
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={regId} onChangeText={(e) => { setCarId(e) }} placeholder="Register Id" w="80%"/>
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={name} onChangeText={(e) => { setBrand(e) }} placeholder="Name" w="80%"/>
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={password} onChangeText={(e)=>{ setType(e) }} placeholder= 'Enter your Password' autoCorrect={false} secureTextEntry={true} textContentType='Password' w="80%"></Input>
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={address} onChangeText={(e) => { setColor(e) }} placeholder="Address" w="80%"/>
                    <Button width={"50%"} size="md" variant="subtle" colorScheme="secondary" onPress={saveData}>
                        Save
                    </Button>
                </VStack>
            </ImageBackground>
        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({

    image1:{
        width: '100%',
        height: '100%',
        opacity: 0.8
    },
});