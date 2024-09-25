import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Icon2 from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useFocusEffect } from 'expo-router';
import Loader from '../components/Loader';


const ItemList = ({ Heading }) => {
  const {id} = useLocalSearchParams();
  const router = useRouter();
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true); 


  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://192.168.0.105:3000/restaurants/${id}`);
          setLoading(false); 
          if (isActive) {
            setItemData(res.data.items); 
          }
            
        } catch (error) {
          console.log('Error fetching data:', error);
        setLoading(false); 

        }
      };
  
      fetchData();
  
      return () => {
        isActive = false; 
        setItemData([]);  
      };
    }, [id]) 
  );
  
  const handleItemClick = (item) => {
    router.push({
      pathname: `/(ItemDetail)/${item.id}`,
      params: {
        id: item.id,
      },
    });
  };

  if (loading) {
    return( 
    <View style={styles.loader} >
      <Loader />
    </View>
    )
  }

  return (
    <View style={styles.popularSection}>
      {Heading && (
        <View style={styles.popularHeader}>
          <Text style={styles.sectionTitle}>{Heading}</Text>
        </View>
      )}
      <View style={styles.burgerList}>
        {itemData.map((item) => (
          <View key={item.id} style={styles.burgerItemContainer}>
            <TouchableOpacity
              style={styles.burgerItem}
              activeOpacity={0.8}
              onPress={() => handleItemClick(item)}
            >
              <View style={styles.burgerImageContainer}>
                <Image style={styles.burgerImage} source={{ uri: item.img }} />
              </View>
              <Text style={styles.burgerName} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.burgerRestaurant} numberOfLines={1} ellipsizeMode="tail">
                {item.restaurant}
              </Text>
              <Text style={styles.burgerPrice}>₹ {item.price}</Text>
              <TouchableOpacity style={styles.addButton}>
                <Icon2 name="add" size={22} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popularSection: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  loader:{
    marginTop: 50
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 21,
    fontFamily: 'Sen-Bold',
  },
  burgerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 9,
    paddingTop: 10,
  },
  burgerItemContainer: {
    width: '48.5%',
  },
  burgerItem: {
    backgroundColor: '#ECF0F4',
    borderRadius: 20,
    padding: 6.5,
  },
  burgerImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
  },
  burgerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  burgerName: {
    fontSize: 17,
    fontFamily: 'Sen-Bold',
  },
  burgerRestaurant: {
    fontSize: 14,
    color: '#7f8c8d',
    fontFamily: 'Sen-Medium',
    marginRight: 34,
  },
  burgerPrice: {
    fontSize: 18,
    fontFamily: 'Sen-Bold',
    marginTop: 5,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FF642F',
    borderRadius: 20,
  },
});

export default ItemList;
