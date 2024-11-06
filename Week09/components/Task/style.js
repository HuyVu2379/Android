import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    square: {
        width: 48,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    even: {
        backgroundColor: 'red',
    }
    ,
    odd: {
        backgroundColor: 'blue',
    }
    ,
    number: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    content: {
        width: '80%',
        fontSize: 16,
    }
});

export default styles;