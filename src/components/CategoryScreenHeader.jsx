import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import FilterModal from './FilterModal';
import SearchBar from '../components/SearchBar'
import { router, useRouter } from 'expo-router';



const CategoryScreenHeader = () => {
  const route = useRouter()
  const [searchBarActive, isSearchBarActive] = useState(false);
  return (
    <>
    <View style={styles.header}>
      <TouchableOpacity style={styles.chevronIconContainer} onPress={() => router.back()}>
        <Icon1 name="chevron-small-left" size={30} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Burger</Text>
        <View style={styles.buttonIconContainer}>
          <Icon3 name="arrow-drop-down" size={24} color="#F4A261" />
        </View>
      </TouchableOpacity>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.searchIconContainer} onPress={() => isSearchBarActive(!searchBarActive) }>
          <Icon2 name="search-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FilterModal />
        </TouchableOpacity>
      </View>
    </View>
    {searchBarActive &&
    <SearchBar />
  }
    
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom:15,
    backgroundColor: '#fff',
        // Add shadow for iOS
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Add elevation for Android
        elevation: 5,

  },
  chevronIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: 45,
    height: 45,
    backgroundColor: '#ECF0F4',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#262626',
    fontSize: 14,
    fontFamily: 'Sen-Medium', 
  },
  buttonIconContainer: {
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 10,
  },
  
  searchIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#000',
    width: 45,
    height: 45,
  },
});

export default CategoryScreenHeader;
