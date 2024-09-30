
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, Image, StyleSheet, Button, TextInput } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Screen3 = () => {
    return (
        <LinearGradient style={styles.dlex}
            // Background Linear Gradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}>
            <View style={{ display: 'flex', flex: 1 }}>
                <View style={[{ display: 'flex', flex: 3 }, styles.textItem]} >
                    <Image style={styles.forImage} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Lock_Icon_black.svg/600px-Lock_Icon_black.svg.png" }} />
                </View>
                <View style={[styles.dlex, styles.textItem]}>
                    <Text style={[styles.fontForGrow, styles.bold]}>FORGET PASSWORD</Text>
                </View>
                <View style={styles.dlex} >
                    <Text style={[styles.dlex, styles.textItem, styles.bold]}>Provide your account’s email for which you want to reset your password</Text>
                </View>
                <View style={styles.formInputEmail}>
                    <MaterialCommunityIcons style={styles.emailIcon} name="email-outline" size={24} color="black" />
                    <TextInput placeholder="Email" style={[styles.input]}
                    />
                </View>
                <View style={[styles.dlex, { marginHorizontal: 20 }]}>
                    <Button title="NEXT" color="#E3C000" />
                </View>
            </View>
        </LinearGradient>
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
    buttonItem: {
        height: 30,
        width: 250
    },
    fontForGrow: {
        fontSize: 20
    },
    forImage: {
        height: 140,
        width: 140
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        backgroundColor: '#C4C4C4',
        color: '#424242',
    },
    formInputEmail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    emailIcon: {
        position: 'absolute',
        left: 10
    },
});

export default Screen3;