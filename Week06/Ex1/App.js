import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Image } from 'react-native';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';

const Item = ({ item }) => (
    <View style={styles.item}>
        <View>
            <Image style={{ height: 74, width: 74 }} source={{ uri: item.image }} />
        </View>
        <View>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.nameShopAndButton}>
                <Text> Shop {item.nameShop}</Text>
                <Button title="Chat" color="red" />
            </View>
        </View>
    </View>
);

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://6458c7608badff578efa8dec.mockapi.io/asd/apiExample')
            .then((response) => setData(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={styles.contentContainer}>
            <View style={styles.contentHeader}>
                <View style={styles.header}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                    <Text style={{ color: 'white' }}>Chat</Text>
                    <AntDesign name="shoppingcart" size={24} color="white" />
                </View>
                <View style={{ justifyContent: 'center', padding: 15 }}>
                    <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
                </View>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data} // Use the fetched data from API
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
            <View style={styles.footer}>
                <AntDesign name="bars" size={24} color="black" />
                <FontAwesome6 name="house" size={24} color="black" />
                <Ionicons name="return-up-back-sharp" size={24} color="black" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        borderTopWidth: 2,
        borderTopColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    title: {
        fontSize: 15,
    },
    contentContainer: {
        backgroundColor: '#E5E5E5',
        flex: 1,
    },
    header: {
        height: 42,
        backgroundColor: '#1BA9FF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    footer: {
        height: 49,
        backgroundColor: '#1BA9FF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    nameShopAndButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
    },
});

export default App;
