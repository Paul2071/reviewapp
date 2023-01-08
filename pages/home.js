import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../globalstyles/global";
import { useState } from 'react';

export default function Home ( {navigation}) {

    const [reviews, setReviews] = useState([
        { title: 'Name of the Wind', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'A Crown for Cold Silver', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Stardust', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
    return (
        <View style={globalStyles.maincontainer}>
         

            <FlatList 
                data={reviews}
                renderItem={( {item} ) => ( 
                <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
                    <Text> {item.title} </Text>
                    
                </TouchableOpacity> )}

            />

         
        </View>
    )
}


