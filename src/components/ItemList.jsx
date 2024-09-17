import React,{useState, useEffect, useCallback} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios'
import { useFocusEffect } from 'expo-router';
import Animated, {useSharedValue, useAnimatedStyle, withSpring, withDelay} from 'react-native-reanimated';


const ItemList = ({ Heading, item  }) => {
  const { id } = useLocalSearchParams(); 
  const [itemData, setItemData] = useState([])
  useFocusEffect(
    useCallback(() => {
      let isActive = true; 
      const fetchData = async () => {
        try {
          const res = await axios.get(`http://192.168.0.104:3000/restaurants/${id}`);
          if (isActive) {
            setItemData(res.data.items); 
          }
        } catch (error) {
          console.log('Error fetching data:', error);
        }
};

      fetchData();

      return () => {
        isActive = false; // Cleanup when screen loses focus or unmounts
        setItemData([]); // Clear data when screen is no longer focused
      };
    }, [id])
  );

  return (
    <View style={styles.popularSection}>
      {Heading && (
        <View style={styles.popularHeader}>
          <Text style={styles.sectionTitle}>{Heading}</Text>
          <TouchableOpacity style={styles.seeMoreButton}>
            <Text style={styles.seeMoreText}>See More</Text>
            <Icon1 name="chevron-small-right" size={18} color="black" />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.burgerList}>
      {itemData.map((item)=>(
      <View key={item.id} style={styles.burgerItemContainer}>
      <Link href={`/(ItemDetail)/${item.id}`} asChild>

        <TouchableOpacity style={styles.burgerItem} activeOpacity={0.8}>
          <View style={styles.burgerImageContainer}>
            <Image style={styles.burgerImage} source={{ uri: item.img }} />
          </View>
          <Text style={styles.burgerName} numberOfLines={1} ellipsizeMode="tail">
  {item.name}
</Text>
<Text style={styles.burgerRestaurant} numberOfLines={1} ellipsizeMode="tail">
  {item.restaurant}
</Text>
          <Text style={styles.burgerPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Icon2 name="add" size={22} color="#fff" />
          </TouchableOpacity>
        </TouchableOpacity>
      </Link>
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
  seeMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Sen-Medium',
    marginRight: 5,
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
    marginRight: 34
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
