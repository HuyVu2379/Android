import React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
const Ex4 = () => {
    const [isChecked, setChecked] = useState(false);
    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['#3B3B98', 'rgba(196, 196, 196, 0)']}
            style={styles.container}
        >
            <View style={styles.contentComponent}>
                <View style={[styles.sesstion, styles.session1]}>
                    <Text style={styles.title}>PASSWORD</Text>
                    <Text style={styles.title}>GENERATOR</Text>
                </View>
                <View style={styles.sesstion}>
                    <TextInput style={[styles.sesstion2, styles.sesstion2]}>
                    </TextInput>
                </View>
                <View style={styles.sesstion3}>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.textWhite}>Password length</Text>
                        <TextInput editable={false} style={styles.passwordLength} />
                    </View>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.textWhite}>Include lower case letters</Text>
                        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                    </View>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.textWhite}>Include upcase letters</Text>
                        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
                    </View>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.textWhite}>Include number</Text>
                        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
                    </View>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.textWhite}>Include special symbol</Text>
                        <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
                    </View>
                </View>
                <View style={styles.sesstion4}>
                    <TouchableOpacity style={styles.buttonGeneration}>
                        <Button title="GENERATE PASSWORD"
                            color="#3B3B98" ></Button>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#3B3B98',
    },
    textWhite: {
        color: 'white',
        fontWeight: '500',
        fontSize: 17
    },
    spaceBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentComponent: {
        flex: 1,
        margin: 20,
        backgroundColor: "#23235B",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    sesstion: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    session1: {
        height: 100,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: 'white'
    },
    sesstion2: {
        height: 40,
        backgroundColor: '#151537',
        width: '90%',
        marginVertical: 10
    },
    sesstion3: {
        marginTop: 30,
        marginHorizontal: 10,
        height: 250,
        display: 'flex',
        justifyContent: 'space-between'
    },
    passwordLength: {
        backgroundColor: 'white',
        width: '47%',
        height: 33
    },
    checkbox: {
        margin: 8,
        padding: 12
    },
    sesstion4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonGeneration: {
        paddingHorizontal: 30,
        backgroundColor: '#3B3B98',
        paddingVertical: 5
    }
});

export default Ex4;
