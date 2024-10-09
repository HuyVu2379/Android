import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import Job from "./Job"
function HomeScreen({ navigation, route }) {
    const [data, setData] = useState([]);
    const [name,setName] = useState();
    useEffect(()=>{
      if(route.params){
        setName(route.params.nameLogin)
      }
    },[route.params]);
    useEffect(() => {
        axios
            .get('https://6458c7608badff578efa8dec.mockapi.io/asd/APIExample')
            .then((response) => setData(response.data))
            .catch((error) => console.error(error));
    }, [data]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <View style={styles.infor}>
                    <Image style={{ height: 50, width: 50, borderRadius: '50%' }} source={require("../assets/shiba.jpg")} />
                    <View>
                        <Text>Hi {name}</Text>
                        <Text>Have a greate day ahead</Text>
                    </View>
                </View>
            </View>


            <View style={styles.formInput}>
                <AntDesign style={{ position: "absolute", left: 23 }} name="search1" size={24} color="black" />
                <TextInput style={styles.textInput} placeholder="Search" />
            </View>


            <View style={{height:300}}>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Job data={item} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Pressable style={styles.btnGetStart} onPress={() => { navigation.navigate('AddJob') }}>
                    <AntDesign name="plus" size={24} color="white" />
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between ",
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infor: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    textInput: {
        paddingLeft: 40,
        height: 35,
        width: '90%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5
    },
    formInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    btnGetStart: {
        borderRadius: '50%',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#00BDD6"
    }
})
export default HomeScreen;