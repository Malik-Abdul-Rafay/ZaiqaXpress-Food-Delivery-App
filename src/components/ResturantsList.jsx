import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const RestaurantList = ({ Heading, }) => {
  const [restaurantData, setRestaurantData] = useState([])
  useEffect(() => {
    axios
      .get("http://192.168.0.105:3000/restaurants")
      .then((res) => {
        setRestaurantData(res.data)
        console.log(res.data);

      })
  }, [])
  return (
    <View style={styles.RestaurantListContainer}>
      {Heading && (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{Heading}</Text>
          <TouchableOpacity style={styles.seeMoreContainer}>
            <Text style={styles.seeMoreText}>See More</Text>
            <Icon2 name="chevron-small-right" size={27} color="#777" />
          </TouchableOpacity>
        </View>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        {restaurantData.map((item, index) => (
          <AnimatedCard item={item} index={index} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};


const AnimatedCard = ({ item, index }) => {
  const translateY = useSharedValue(30);
  const opacity = useSharedValue(0);

  useFocusEffect(
    React.useCallback(() => {
      translateY.value = 60;
      opacity.value = 0;
      translateY.value = withTiming(0, { duration: 100 });
      opacity.value = withTiming(1, { duration: 400 });
    }, [])
  );


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <Link href={`/(RestaurantsDetail)/${item.id}`} asChild>

        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image source={{ uri: item.img }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.subtitle}>
              {(item.categories).map((category, index, array) => (
                <Text style={styles.subtitleText} key={index}>
                  {category}{index < array.length - 1 ? ', ' : ''}
                </Text>
              ))}
            </View>


            <View style={styles.iconRow}>
              <View style={styles.iconWithText}>
                <Icon1 name="star" size={22} color="#FF642F" />
                <Text style={styles.iconText}>{item.reviews}</Text>
              </View>
              <View style={styles.iconWithText}>
                <Icon3 name="truck-fast-outline" size={22} color="#FF642F" />
                <Text style={styles.iconText}>₹ {item.deliveryPrice}</Text>
              </View>
              <View style={styles.iconWithText}>
                <Icon3 name="clock-time-three-outline" size={22} color="#FF642F" />
                <Text style={styles.iconText}>{item.deliveryTiming}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  RestaurantListContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
    marginTop: 15,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Sen-Bold',
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 16,
    color: '#676767',
    fontFamily: 'Sen-Medium',
  },
  card: {
    flexDirection: 'column',
    paddingVertical: 8,
  },
  image: {
    height: 170,
    borderRadius: 12,
  },
  infoContainer: {
    marginTop: 14,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    fontFamily: 'Sen-SemiBold',
  },
  subtitle: {
    flexDirection: "row",
    gap: 5
  },
  subtitleText: {
    fontSize: 14,
    fontFamily: 'Sen-Regular',
    color: '#777',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    marginLeft: 4,
    fontSize: 15,
    color: '#333',
    fontFamily: 'Sen-Medium',
  },
});

export default RestaurantList;
