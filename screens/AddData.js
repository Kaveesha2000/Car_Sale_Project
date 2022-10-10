import React, { useState } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button } from 'native-base'
import { Alert, StyleSheet,ImageBackground } from 'react-native';

export default function AddData({navigation}) {
    const [carId, setCarId] = useState('');
    const [brand, setBrand] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');

    const saveData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                carId: carId,
                brand: brand,
                type: type,
                color: color
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
            <ImageBackground source={require("./assets/carData.jpg")} resizeMode="cover" style={styles.image1}>
                <Text fontSize="3xl" bold  color={"white"} underline mt="10%" ml="30%">Car Register</Text>
                <VStack space={4} alignItems="center" mt="15%">
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={carId} onChangeText={(e) => { setCarId(e) }} placeholder="Car Id" w="80%"/>
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={brand} onChangeText={(e) => { setBrand(e) }} placeholder="Brand" w="80%"/>
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={type} onChangeText={(e) => { setType(e) }} placeholder="Type" w="80%"/>
                    <Input mx="3" color={"white"} placeholderTextColor={"white"} value={color} onChangeText={(e) => { setColor(e) }} placeholder="Color" w="80%"/>
                    <Button width={"50%"} size="md" variant="subtle" colorScheme="secondary" onPress={saveData}>
                        Save
                    </Button>
                    <Button size="md" variant="subtle" colorScheme="green" onPress={()=>{navigation.navigate("CarViewPage")}}>
                        Click To View Cars
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