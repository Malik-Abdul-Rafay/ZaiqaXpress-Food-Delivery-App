import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddressScreen = () => {
  const addresses = [
    { id: 1, type: 'home', address: '2464 Royal Ln. Mesa, New Jersey 45463' },
    { id: 2, type: 'work', address: '3891 Ranchview Dr. Richardson, California 62639' },
  ];

  const getIconName = (type) => {
    return type === 'home' ? 'home' : 'briefcase'; // Replaced 'gift' with 'briefcase' for work
  };

  const handleAddAddress = () => {
    console.log('Add new address');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name={getIconName(item.type)} size={24} color={item.type === 'home' ? '#007bff' : '#ea4c89'} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.type.toUpperCase()}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => console.log('Edit', item.id)}>
          <Icon name="pencil" size={20} color="#f57c00" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Delete', item.id)} style={styles.deleteButton}>
          <Icon name="trash-can" size={20} color="#f44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Address List */}
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Add New Address Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
        <Text style={styles.addButtonText}>ADD NEW ADDRESS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Sen-Bold',
  },
  listContainer: {
    paddingVertical: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f5f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  iconContainer: {
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  address: {
    color: '#707070',
    fontFamily: 'Sen-Regular',
  },
  actionContainer: {
    flexDirection: 'row',
  },
  deleteButton: {
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#f57c00',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom:16
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Sen-Bold',
  },
});

export default AddressScreen;
