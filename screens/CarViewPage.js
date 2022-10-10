import { View, Text, FlatList,TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CarViewPage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
    })

    return (
        <View style={{padding:10}}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5}} onPress={()=>{console.log("hello");}}>
                            <Text style={{marginBottom:10,fontWeight:'bold'}} >Car Id: {item.carId}</Text>
                            <Text style={{marginBottom:10}} >Brand : {item.brand}</Text>
                            <Text style={{marginBottom:10}} >Type : {item.type}</Text>
                            <Text style={{marginBottom:10}} >Color : {item.color}</Text>
                        </TouchableOpacity>
                    }
                />
        </View>
    )
}