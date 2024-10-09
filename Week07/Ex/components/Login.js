import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
function Login({ navigation }) {
  const [NameLogin,setNameLogin] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
            </View>
            <View>
                <Text style={{ fontSize: 25, color: 'purple', fontWeight: '600' }}>MANAGE YOUR TASK</Text>
            </View>
            <View style={styles.formInput}>
                <Fontisto style={{ position: 'absolute', left: 20 }} name="email" size={24} color="black" />
                <TextInput value={NameLogin} style={styles.textInput} placeholder="Enter your name" 
                onChangeText={text=>setNameLogin(text)}
                />
            </View>
            <Pressable style={styles.btnGetStart} onPress={() => { navigation.navigate('HomeScreen',{nameLogin:NameLogin}) }}>
                <Text style={{ color: 'white' }}>GET STARTED</Text>
                <AntDesign name="arrowright" size={20} color="white" />
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#ecf0f1',
        padding: 8,
        alignItems: 'center',
    },
    banner: {
        height: 271,
        width: 271,
        backgroundColor: 'pink'
    },
    textInput: {
        paddingLeft: 40,
        height: 30,
        width: '90%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5
    },
    formInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    btnGetStart: {
        flexDirection: 'row',
        backgroundColor: "#00BDD6",
        width: '50%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
});
export default Login
