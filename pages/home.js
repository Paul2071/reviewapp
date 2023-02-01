import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal } from "react-native";
import { globalStyles } from "../globalstyles/global";
import { useState } from 'react';
import MainCard from "../components/mainCard";

export default function Home ( {navigation}) {

    const [ modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState([
        { title: 'Name of the Wind', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'A Crown for Cold Silver', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Stardust', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);
    return (
        <View style={globalStyles.maincontainer}>
         
         <Modal visible={modalOpen} >
            <View style={globalStyles.modalcontainer}>
                <Text>Hello from the Modal</Text>
            </View>
                <Button 
                    title="finished review" 
                    onPress={() => setModalOpen(value => !value) }
                    />

         </Modal>

        <Button 
        title="Add a review" 
        onPress={() => setModalOpen(value => !value) }
        />

            <FlatList 
                data={reviews}
                renderItem={( {item} ) => ( 
                <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
                 <MainCard>
                    <Text style={globalStyles.titletext}> {item.title} </Text>
                 </MainCard>   
                </TouchableOpacity> )}

            />

         
        </View>
    )
}


