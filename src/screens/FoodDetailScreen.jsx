import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView, Animated } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const FoodDetailsScreen = () => {
  const [detailData, setDetailData] = useState(null);
  const { id } = useLocalSearchParams();
  const [size, setSize] = useState('14');
  const [quantity, setQuantity] = useState(2);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideInAnim = useRef(new Animated.Value(-50)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://192.168.0.103:4000/items/${id}`);
        setDetailData(res.data);
      } catch (err) {
        console.log("Error Fetching Data", err);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    // Fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Slide-in animation for details
    Animated.timing(slideInAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Slide-up animation for footer
    Animated.timing(slideUpAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, slideInAnim, slideUpAnim]);

  if (!detailData) return <Text>Loading...</Text>;

  const { name, price, description, rating, delivery_fee, delivery_time, size: sizes, ingredients, img, restaurant } = detailData;

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]}>
        <Image style={styles.image} source={{ uri: img }} />
      </Animated.View>
      <Animated.View style={[styles.infoContainer, { transform: [{ translateY: slideInAnim }] }]}>
        <View style={styles.containerResturantName}>
          <TouchableOpacity style={styles.buttonResturantName}>
            <Text style={styles.textResturantName}>{restaurant}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.foodName}>{name}</Text>
        <Text style={styles.foodDescription}>
          {description}
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconWithText}>
            <Icon2 name="star" size={23} color="#FF642F" />
            <Text style={styles.iconText}>{rating}</Text>
          </View>
          <View style={styles.iconWithText}>
            <Icon2 name="bicycle" size={23} color="#FF642F" />
            <Text style={styles.iconText}>{delivery_fee}</Text>
          </View>
          <View style={styles.iconWithText}>
            <Icon2 name="time-outline" size={23} color="#FF642F" />
            <Text style={styles.iconText}>{delivery_time}</Text>
          </View>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeTitle}>SIZE:</Text>
          <View style={styles.sizes}>
            {sizes.map((s) => (
              <TouchableOpacity
                key={s}
                style={[styles.sizeButton, size === s && styles.sizeButtonActive]}
                onPress={() => setSize(s)}
              >
                <Text style={[styles.sizeText, size === s && styles.sizeTextActive]}>{s}"</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={ingredients}
          style={styles.ingredientItemContainer}
          renderItem={({ item }) => (
            <View style={styles.ingredientItem}>
              <Text style={styles.ingredientText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </Animated.View>

      <Animated.View style={[styles.priceAndAddToCartContainer, { transform: [{ translateY: slideUpAnim }] }]}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Icon3 name="minus" size={25} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => setQuantity(quantity + 1)}>
              <Icon3 name="plus" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#CCCCCC', // Placeholder color for the image
    borderRadius: 24,
  },
  buttonResturantName: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  containerResturantName: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textResturantName: {
    fontSize: 15,
    color: '#333',
    fontFamily: 'Sen-Medium',
  },
  foodName: {
    marginTop: 20,
    fontSize: 22,
    fontFamily: 'Sen-Bold',
    paddingHorizontal: 20,
  },
  foodDescription: {
    marginTop: 10,
    fontSize: 16,
    color: '#888888',
    fontFamily: 'Sen-Medium',
    paddingHorizontal: 20,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 27,
    marginTop: 20,
    paddingHorizontal: 20
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconText: {
    fontSize: 17.5,
    color: '#333',
    fontFamily: 'Sen-Medium',
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20
  },
  sizeTitle: {
    fontSize: 17,
    fontFamily: 'Sen-SemiBold',
  },
  sizes: {
    flexDirection: 'row',
    gap: 7,
  },
  sizeButton: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 50,
    marginRight: 8,
  },
  sizeButtonActive: {
    backgroundColor: '#FF642F',
  },
  sizeText: {
    fontSize: 15,
    fontFamily: 'Sen-Medium',
    color: '#000000',
  },
  sizeTextActive: {
    color: '#FFFFFF',
    fontFamily: 'Sen-Bold',
  },
  ingredientItemContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    width: '100%'
  },
  ingredientsTitle: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'Sen-SemiBold',
    paddingHorizontal: 20,
  },
  ingredientItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#FF642F',
  },
  ingredientText: {
    fontSize: 14,
    fontFamily: 'Sen-SemiBold',
    color: 'black',
  },
  priceAndAddToCartContainer: {
    backgroundColor: '#F0F5FA',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 30,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  price: {
    fontSize: 28,
    fontFamily: 'Sen-Bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#FF642F',
    borderRadius: 50,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: 'black',
    minWidth: 27,
    fontFamily: 'Sen-Medium',
  },
  addButton: {
    backgroundColor: '#FF642F',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Sen-Bold',
  },
});

export default FoodDetailsScreen;
