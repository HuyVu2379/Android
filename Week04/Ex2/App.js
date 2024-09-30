import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const handleIncrease = (numbers) => {
    return numbers.map(value => value + 1);
};

const Ex2 = () => {
    const [number, setNumber] = useState([1, 2, 3]);

    return (
        <View>
            <Button
                title="Click to increase number"
                onPress={() =>
                    setNumber(handleIncrease(number))
                }
            />
            <View style={styles.container}>
                {number.map((value, index) => {
                    return (
                        <View key={index}>
                            <Text>{value}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});

export default Ex2;
