import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(menuItems.map(() => new Animated.Value(-100))).current;

  useEffect(() => {
    // Fade-in animation for profile info
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Slide-in animations for menu items
    const animations = menuItems.map((_, index) =>
      Animated.timing(slideAnim[index], {
        toValue: 0,
        duration: 500,
        delay: index * 100, // Stagger animation
        useNativeDriver: true,
      })
    );

    Animated.stagger(100, animations).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Profile Info Section */}
      <Animated.View style={[styles.profileInfo, { opacity: fadeAnim }]}>
        <Image style={styles.avatar} source={{ uri: "https://ideogram.ai/assets/image/lossless/response/qX4JYdC4RW-TyeQ7_9VQmw" }} />
        <Text style={styles.name}>Abdul Rafay Malik</Text>
        <Text style={styles.tagline}>App Developer Name</Text>
      </Animated.View>

      {/* Menu Items */}
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <Animated.View
            key={index}
            style={[
              styles.menuItem,
              {
                transform: [{ translateX: slideAnim[index] }],
                opacity: slideAnim[index].interpolate({
                  inputRange: [-100, 0],
                  outputRange: [0, 1],
                }),
              },
            ]}
          >
            <TouchableOpacity style={styles.menuItemTouchable} >
              <View style={styles.menuIcon}>
                <Icon name={item.icon} size={24} color={item.color} />
              </View>
              <Text style={styles.menuText}>{item.label}</Text>
              <Icon name="chevron-right" size={24} color="#333" />
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
};

const menuItems = [
  { label: 'Personal Info', icon: 'person', color: '#FF6B6B' },
  { label: 'Addresses', icon: 'location-on', color: '#4ECDC4' },
  { label: 'Cart', icon: 'shopping-cart', color: '#1A535C' },
  { label: 'Favourite', icon: 'favorite', color: '#FF6B6B' },
  { label: 'Notifications', icon: 'notifications', color: '#FF6B6B' },
  { label: 'Payment Method', icon: 'credit-card', color: '#FFE66D' },
  { label: 'FAQs', icon: 'help', color: '#FF6B6B' },
  { label: 'User Reviews', icon: 'rate-review', color: '#4ECDC4' },
  { label: 'Settings', icon: 'settings', color: '#FF6B6B' },
  { label: 'Log Out', icon: 'exit-to-app', color: '#FF6B6B' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ECF0F4',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: "#ecf0f4",
  },
  name: {
    fontSize: 20,
    fontFamily: 'Sen-Bold',
    color: '#333',
  },
  tagline: {
    fontSize: 14,
    fontFamily: 'Sen-Regular',
    color: '#999',
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ECf0f4',
  },
  menuItemTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Sen-Medium',
    color: '#333',
  },
});

export default ProfileScreen;
