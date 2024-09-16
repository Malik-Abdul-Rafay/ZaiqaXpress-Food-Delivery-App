import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';

export default function CartScreen() {
  const [quantity, setQuantity] = React.useState(2);
  const [address, setAddress] = React.useState('2118 Thornridge Cir. Syracuse');
  const [cartItems, setCartItems] = React.useState([
    { 
      id: 1, 
      name: 'Burger Deluxe', 
      price: '$32', 
      size: '14"', 
      imageUri: 'https://cdn.usarestaurants.info/assets/uploads/f812394385526df240583ac3881f25e9_-united-states-florida-broward-county-pompano-beach-happy-rooster-restaurant-954-532-0803htm.jpg' 
    },
    { 
      id: 2, 
      name: 'Pizza Calzone European', 
      price: '$32', 
      size: '14"', 
      imageUri: 'https://cdn.pixabay.com/photo/2024/04/23/09/32/ai-generated-8714516_1280.jpg' 
    }
  ]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(cartItems.map(() => new Animated.Value(-100))).current;
  const footerAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    // Fade-in animation for cart items
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Slide-in animations for cart items
    const itemAnimations = cartItems.map((_, index) =>
      Animated.timing(slideAnim[index], {
        toValue: 0,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      })
    );

    Animated.stagger(100, itemAnimations).start();

    // Slide-up animation for footer
    Animated.timing(footerAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const deleteItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartItemContainer}>
        <View>
          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <Animated.View
              key={item.id}
              style={[
                styles.cartItem,
                {
                  transform: [{ translateX: slideAnim[index] }],
                  opacity: fadeAnim,
                },
              ]}
            >
              <Image source={{ uri: item.imageUri }} style={styles.imagePlaceholder} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <View style={styles.itemDetailsBottom}>
                  <View>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                    <Text style={styles.itemSize}>{item.size}</Text>
                  </View>

                  <View style={styles.quantityControl}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                      <Icon1 name="minus" size={18} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.quantityNumber}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                      <Icon1 name="plus" size={18} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
                <Icon2 name="delete" size={20} color="#FF0000" />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Footer */}
      <Animated.View style={[styles.bottomFooter, { transform: [{ translateY: footerAnim }] }]}>
        {/* Delivery Address Section */}
        <View style={styles.addressSection}>
          <View style={styles.addressHeader}>
            <Text style={styles.addressLabel}>DELIVERY ADDRESS</Text>
            <TouchableOpacity>
              <Text style={styles.editAddress}>EDIT</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.addressInput}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Total and Place Order Section */}
        <View style={styles.footer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>TOTAL:</Text>
            <Text style={styles.totalAmount}>$96</Text>
          </View>
          <TouchableOpacity style={styles.placeOrderButton}>
            <Text style={styles.placeOrderText}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartItemContainer: {
    paddingTop: 12,
    marginBottom: 240,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 20,
    backgroundColor: "#ECF0F4",
    padding: 5,
    borderRadius: 13,
  },
  imagePlaceholder: {
    width: 110,
    height: 110,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 17,
    marginBottom: 4,
    color: '#000',
    fontFamily: 'Sen-SemiBold',
  },
  itemDetailsBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  itemPrice: {
    fontSize: 20,
    marginBottom: 4,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
  itemSize: {
    fontSize: 17,
    color: '#888',
    fontFamily: 'Sen-Regular',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF0F4',
    padding: 5,
    borderRadius: 50,
  },
  quantityButton: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF642F',
    borderRadius: 50,
  },
  quantityNumber: {
    fontSize: 16,
    marginHorizontal: 8,
    color: '#000',
    fontFamily: 'Sen-Medium',
    minWidth: 18,
  },
  deleteButton: {
    position: "absolute",
    top: 13,
    right: 10,
  },
  bottomFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ECF0F4',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5, // Optional: for shadow effect on Android
  },
  addressSection: {
    marginVertical: 16,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  addressLabel: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
  editAddress: {
    color: '#FF642F',
    fontFamily: 'Sen-SemiBold',
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#FFF',
    fontFamily: 'Sen-Regular',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  footer: {
    paddingTop: 16,
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    gap: 15,
  },
  totalLabel: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
  totalAmount: {
    fontSize: 26,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
  placeOrderButton: {
    backgroundColor: '#FF642F',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  placeOrderText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Sen-Bold',
  },
});
