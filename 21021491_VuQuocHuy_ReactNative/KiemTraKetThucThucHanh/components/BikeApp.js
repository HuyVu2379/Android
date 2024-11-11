import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, getApi, addProductApi } from '../Redux/ProductSlice';

const BikeApp = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    useEffect(() => {
        dispatch(getApi());
    }, [dispatch]);

    const [modalVisible, setModalVisible] = useState(false);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleAddProduct = () => {
        const newProduct = {
            name: productName,
            price: productPrice,
            imageUrl: 'https://i.ibb.co/M8TnLqf/bike1.png',
        };

        dispatch(addProductApi(newProduct));

        // Close modal and reset fields
        setModalVisible(false);
        setProductName('');
        setProductPrice('');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.bikeImage} />
            <Text style={styles.bikeName}>{item.name}</Text>
            <Text style={styles.bikePrice}>${item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>The world's Best Bike</Text>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />

            {/* Add Button to open modal */}
            <TouchableOpacity style={styles.buttonAdd} onPress={() => setModalVisible(true)}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Add</Text>
            </TouchableOpacity>

            {/* Modal to add product */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add New Product</Text>

                        <TextInput
                            placeholder="Product Name"
                            style={styles.input}
                            value={productName}
                            onChangeText={setProductName}
                        />
                        <TextInput
                            placeholder="Product Price"
                            style={styles.input}
                            value={productPrice}
                            onChangeText={setProductPrice}
                            keyboardType="numeric"
                        />

                        <View style={styles.modalButtons}>
                            <Button title="Add" onPress={handleAddProduct} />
                            <Button title="Cancel" color="red" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#D32F2F',
        textAlign: 'center',
        marginBottom: 10,
    },
    listContainer: {
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        margin: 5,
        padding: 10,
        width: '45%',
        alignItems: 'center',
        elevation: 5,
    },
    bikeImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    bikeName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    bikePrice: {
        fontSize: 16,
        color: '#FFA000',
        textAlign: 'center',
    },
    buttonAdd: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        marginTop: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default BikeApp;
