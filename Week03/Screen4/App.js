
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, Image, StyleSheet, Button, TextInput } from 'react-native';

const Screen4 = () => {
    return (
        <LinearGradient style={styles.dlex}
            // Background Linear Gradient
            colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}>
            <View style={{ display: 'flex', flex: 1 }}>
                <View style={[{ display: 'flex', flex: 2 }, styles.textItem]} >
                    <Text style={[styles.fontForTitle, styles.bold]}>CODE</Text>
                </View>
                <View style={[styles.dlex, { alignItems: 'center' }]}>
                    <Text style={[styles.fontForGrow, styles.bold]}>VERIFICATION</Text>
                </View>
                <View style={styles.dlex} >
                    <Text style={[styles.dlex, styles.textItem, styles.bold]}>Enter ontime password sent on<br />
                        ++849092605798
                    </Text>
                </View>
                <View style={[styles.dlex, { flexDirection: 'row', justifyContent: 'center' }]}>
                    <TextInput style={styles.numberCode} />
                    <TextInput style={styles.numberCode} />
                    <TextInput style={styles.numberCode} />
                    <TextInput style={styles.numberCode} />
                    <TextInput style={styles.numberCode} />
                    <TextInput style={styles.numberCode} />
                </View>
                <View style={[styles.dlex, { marginHorizontal: 20 }]}>
                    <Button title="VERIFY CODE" color="#E3C000" />
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
        width: 200
    },
    fontForGrow: {
        fontSize: 20
    },
    fontForTitle: {
        fontSize: 60
    },
    numberCode: {
        textAlign: 'center',
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default Screen4;