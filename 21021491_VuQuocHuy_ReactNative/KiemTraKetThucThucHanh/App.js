import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Pressable } from 'react-native';

const bikes = [
  { id: 1, name: 'Pinarello', price: '$1800', image: require('./assets/bike1.png') },
  { id: 2, name: 'Pina Mountai', price: '$1700', image: require('./assets/bike2.png') },
  { id: 3, name: 'Pina Bike', price: '$1500', image: require('./assets/bike3.png') },
  { id: 4, name: 'Pinarello', price: '$1900', image: require('./assets/bike4.png') },
  { id: 5, name: 'Pinarello', price: '$2700', image: require('./assets/bike5.png') },
  { id: 6, name: 'Pinarello', price: '$1350', image: require('./assets/bike6.png') },
];

const BikeApp = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>The world's Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, styles.selectedFilter]}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bikes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.buttonAdd}>
        <Pressable>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Add</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D32F2F',
  },
  selectedFilter: {
    backgroundColor: 'white',
  },
  filterText: {
    color: '#D32F2F',
    fontSize: 16,
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
    backgroundColor: 'green'
  }
});

export default BikeApp;
