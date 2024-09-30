import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

const Screen1 = () => {
    return (
        <View style={{ display: 'flex', flex: 1, backgroundColor: '#00CCF9' }}>
            <View style={[{ display: 'flex', flex: 2 }, styles.textItem]} >
                <Image style={styles.forImage} source={{ uri: "https://www.svgrepo.com/show/135058/circle-outline.svg" }} />
            </View>
            <View style={[styles.dlex, styles.textItem]}>
                <Text style={[styles.fontForGrow, styles.bold]}>GROW YOUR BUSINESS</Text>
            </View>
            <View style={styles.dlex} >
                <Text style={[styles.dlex, styles.textItem, styles.bold]}>We will help you to grow your business using online server</Text>
            </View>
            <View style={[styles.dlex, { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }]}>
                <Button title="Login" color="#E3C000" />
                <Button title="Sign up" color="#E3C000" />
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
    buttonItem: {
        height: 30,
        width: 200
    },
    fontForGrow: {
        fontSize: 20
    },
    forImage: {
        height: 140,
        width: 140
    }
});

export default Screen1;