import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { CartContext } from '../context/CartContext';

export default function CartScreen() {
  const [address, setAddress] = useState('2118 Thornridge Cir. Syracuse');
  const { cartItem, setCartItem,removeItemFromCart, addItemToCart, lessQuantityFromCart } = useContext(CartContext);
  const totalAmount = cartItem.reduce((total, obj) => total + obj.quantity * obj.price, 0);
  const totalQuantity = cartItem.reduce((total, obj) => total + obj.quantity, 0);



  return (
    <View style={styles.container}>
      <ScrollView style={styles.cartItemContainer}>
        <View>
          {/* Display Cart Items or Empty Message */}
          {cartItem.length > 0 ? (
            cartItem.map((item) => (
              <View key={item.id} style={styles.cartItem}>
                <Image source={{ uri: item.imageUri }} style={styles.imagePlaceholder} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <View style={styles.itemDetailsBottom}>
                    <View>
                      <Text style={styles.itemPrice}>₹ {item.price}</Text>
                      <Text style={styles.itemSize}>{item.size}</Text>
                    </View>

                    <View style={styles.quantityControl}>
                      <TouchableOpacity disabled={item.quantity <= 1} onPress={() => lessQuantityFromCart(item.id)} style={styles.quantityButton}>
                        <Icon1 name="minus" size={18} color="#fff" />
                      </TouchableOpacity>
                      <Text style={styles.quantityNumber}>{item.quantity}</Text>
                      <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.quantityButton}>
                        <Icon1 name="plus" size={18} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeItemFromCart(item.id)} style={styles.deleteButton}>
                  <Icon2 name="delete" size={20} color="#FF0000" />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <View style={styles.emptyCartContainer}>
              <Text style={styles.emptyCartText}>Your cart is empty!</Text>
              <Text style={styles.emptyCartSubText}>Add some items to get started.</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Footer */}
      <View style={styles.bottomFooter}>
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
            <Text style={styles.totalLabel}>TOTAL QUANTITY:</Text>
            <Text style={styles.totalAmount}>{totalQuantity}</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>TOTAL AMOUNT:</Text>
            <Text style={styles.totalAmount}>₹ {Math.round(totalAmount)}</Text>
          </View>
          <TouchableOpacity style={styles.placeOrderButton}>
            <Text style={styles.placeOrderText}>PLACE ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginBottom: 280,
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
  emptyCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 20,
    color: '#FF642F',
    fontFamily: 'Sen-Bold',
    marginBottom: 8,
  },
  emptyCartSubText: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'Sen-Regular',
  },
  bottomFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ECF0F4',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5, // Optional: for shadow effect on Android
  },
  addressSection: {
    marginTop: 8,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  addressLabel: {
    fontSize: 17,
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
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    paddingVertical: 12,
  },
  totalLabel: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
  totalAmount: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
  placeOrderButton: {
    backgroundColor: '#FF642F',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 15,
  },
  placeOrderText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Sen-Bold',
  },
});
