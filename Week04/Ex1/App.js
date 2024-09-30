import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

const handleClick = function (e) {
    return e + 1;
}
const Ex1 = () => {
    const [number, setNumber] = useState(1)
    return (
        <View>
            <Button
                title="Click to increase number"
                onPress={() =>
                    setNumber(handleClick(number))
                }
            />
            <Text>{number}</Text>
        </View>
    )
}
export default Ex1;