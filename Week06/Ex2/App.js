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
    TextInput
} from 'react-native';

const Item = ({ item }) => (
    <View style={styles.item}>
        <View>
            <Image style={{ height: 90, width: 155 }} source={{ uri: item.image }} />
        </View>
        <View style={{ paddingLeft: 20 }}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image source={require('./Group 3.png')} />
                <Text>({item.numberRate})</Text>
            </View>
            <View style={styles.price}>
                <Text>{item.price}</Text>
                <Text style={styles.linethrough}>{item.discount}%</Text>
            </View>
        </View>
    </View>
);

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://6458c7608badff578efa8dec.mockapi.io/asd/apiExample2')
            .then((response) => setData(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <View style={styles.contentContainer}>
            <View>
                <View style={styles.header}>
                    <View style={styles.formatSearchBar}>
                        <AntDesign name="arrowleft" size={24} color="white" />
                        <AntDesign style={{ position: 'absolute', left: 50 }} name="search1" size={24} color="black" /></View>
                    <TextInput style={styles.searchBar} placeholder="Dây cáp usb" />
                    <AntDesign name="shoppingcart" size={24} color="white" />
                    <AntDesign name="ellipsis1" size={24} color="white" />
                </View>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data} // Use the fetched data from API
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
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
        alignItems: 'flex-start',
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
    linethrough: {
        textDecorationLine: 'line-through'
    },
    price: {
        flexDirection: 'row',
        gap: 20
    },
    searchBar: {
        width: 200,
        height: 30,
        backgroundColor: 'white',
        paddingLeft: 30
    },
    formatSearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default App;
