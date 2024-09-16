import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import Icon1 from 'react-native-vector-icons/Entypo';

import img_11 from '../../assets/images/pizza.png';
import img_8 from '../../assets/images/burger.png';
import img_7 from '../../assets/images/fire.png';
import img_9 from '../../assets/images/ice cream.png';

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: img_7 },
    { name: 'Pizza', icon: img_11 },
    { name: 'Burger', icon: img_8 },
    { name: 'Ice Cream', icon: img_9 },
  ];

  // Shared values for animation
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);

  useFocusEffect(
    useCallback(() => {
      // Fade in and scale up animation when the screen comes into focus
      opacity.value = withSpring(1, { duration: 300, easing: Easing.inOut(Easing.ease) });
      scale.value = withSpring(1.1, { duration: 300, easing: Easing.inOut(Easing.ease) }, () => {
        scale.value = withSpring(1, { duration: 300, easing: Easing.inOut(Easing.ease) });
      });
    }, [opacity, scale])
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  const handlePress = (category) => {
    setSelectedCategory(category.name);
    // Optionally trigger animation on press
    scale.value = withSpring(1.1, { duration: 200, easing: Easing.inOut(Easing.ease) }, () => {
      scale.value = withSpring(1, { duration: 200, easing: Easing.inOut(Easing.ease) });
    });
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.categoryContainer,
        selectedCategory === item.name && styles.selectedCategory,
        index === 0 && styles.categoryFirstChild
      ]}
      onPress={() => handlePress(item)}
    >
      <Animated.View style={animatedStyle}>
        <Image source={item.icon} style={styles.icon} />
      </Animated.View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText2}>Categories</Text>
        <TouchableOpacity style={styles.seeMoreContainer}>
          <Text style={styles.seeMoreText}>See More</Text>
          <Icon1 name="chevron-small-right" size={27} color="#777" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
  },
  headerText2: {
    fontSize: 20,
    fontFamily: 'Sen-Bold',
  },
  seeMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeMoreText: {
    fontSize: 15,
    color: '#676767',
    fontFamily: 'Sen-Medium',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ecf0f4',
    marginRight: 12,
    width: 'auto',
    gap: 12,
    paddingHorizontal: 9,
    minWidth: 120,
    height: 50,
  },
  selectedCategory: {
    backgroundColor: '#FFDEAD',
  },
  categoryFirstChild: {
    marginLeft: 20,
  },
  icon: {
    width: 35,
    height: 35,
    objectFit: 'contain',
  },
  categoryText: {
    fontSize: 17,
    fontFamily: 'Sen-Medium',
  },
});

export default CategorySelector;
