
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, Image, StyleSheet, Button, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import EvilIcons from '@expo/vector-icons/EvilIcons';
const Screen5 = () => {
    return (
        <View style={{ display: 'flex', flex: 1, backgroundColor: '#D8EFDF' }}>
            <View style={[{ display: 'flex', flex: 1 }, styles.textItem]} >
                <Text style={[styles.fontForTitle, styles.bold]}>LOGIN</Text>
            </View>
            <View style={[styles.dlex, { justifyContent: 'center', gap: 20 }]}>
                <View style={styles.formInput}>
                    <TextInput style={[styles.input, { paddingRight: 10 }]} placeholder="Email" />
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.input} placeholder="Password" />
                    <AntDesign style={styles.yeyIcon} name="eye" size={30} color="black" />
                </View>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Button title="LOGIN" color="#E53935" />
            </View>
            <br />
            <View style={styles.textItem}>
                <View>
                    <Text style={styles.about}>When you agree to terms and conditions</Text>
                </View>
                <br />
                <View><a href="#">For got your password?</a>
                </View>
                <br />
                <View><Text style={styles.about}>Or login with</Text>
                </View>
            </View>
            <View style={[styles.dlex, styles.textItem, { flexDirection: 'row' }]}>
                <View style={[styles.socialIcon, styles.facebookIcon]}>
                    <EvilIcons name="sc-facebook" size={50} color="white" />
                </View>
                <View style={[styles.socialIcon, styles.ZIcon]}>
                    <FontAwesome6 name="z" size={40} color="white" />
                </View>
                <View style={[styles.socialIcon, styles.googleIcon]}>
                    <AntDesign name="google" size={40} color="black" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dlex: {
        display: 'flex',
        flex: 1
    },
    bold: {
        fontWeight: 'bold'
    },
    textItem: {
        textAlign: 'center',
        justifyContent: 'center', alignItems: 'center'
    },
    about: {
        fontWeight: '500'
    }
    ,
    fontForTitle: {
        fontSize: 40
    },
    formInput: {
        marginHorizontal: 20,
        display: 'flex',
        justifyContent: 'center'
    }
    ,
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 40,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#C4C4C4',
        color: '#424242',
        fontWeight: '600'
    },
    yeyIcon: {
        position: 'absolute',
        right: 10
    },
    socialIcon: {
        display: 'flex',
        height: 50,
        width: 100,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookIcon: {
        backgroundColor: '#27538E'
    },
    ZIcon: {
        backgroundColor: '#1593C6'
    },
    googleIcon: {
        borderColor: '#1593C6',
        borderWidth: 2
    }
});

export default Screen5;