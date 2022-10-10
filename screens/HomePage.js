import React from 'react'
import { NativeBaseProvider, Box, Button, Switch, VStack, TextArea } from "native-base";
import {ImageBackground} from 'react-native'

export default function HomePage({ navigation }) {
  return (
            <NativeBaseProvider>
                <VStack space={2} alignItems="center">
                    <Button mt={'40%'} size="lg" variant="outline" colorScheme="secondary" width={'80%'} onPress={()=>{navigation.navigate("Login")}}>
                        Login
                    </Button>
                    <Button mt={'10%'} size="lg" variant="outline" colorScheme="secondary" width={'80%'} onPress={()=>{navigation.navigate("RegisterPage")}}>
                        User registeration
                    </Button>
                    <Button mt={'10%'} size="lg" variant="outline" colorScheme="secondary" width={'80%'} onPress={()=>{navigation.navigate("AddData")}}>
                        Add a car
                    </Button>
                    <Button mt={'10%'} size="lg" variant="outline" colorScheme="secondary" width={'80%'} onPress={()=>{navigation.navigate("CarViewPage")}}>
                        View car
                    </Button>
                </VStack>
            </NativeBaseProvider>
  )
}