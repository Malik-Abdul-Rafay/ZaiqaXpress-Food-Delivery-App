import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import img1 from "../../assets/images/OrderEmptyImage.png";

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.allButtonContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.emptyOrderContainer}>
        <Image style={styles.emptyImage} source={img1} />
        <View style={styles.emptyTextContainer}>
          <Text style={styles.emptyText}>You don't have any active orders at this time</Text>
        </View>
      </View>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30, 
    backgroundColor: "#fff"
  },
  allButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#FF642F",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Sen-Bold',
    color: "white",
    padding: 12,
    textAlign: 'center', // Centered text in button
  },
  emptyOrderContainer: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1,
  },
  emptyImage: {
    width: "45%",
    height: "50%",
    resizeMode: 'contain',
  },
  emptyText: {
    color:"#888",
    fontSize: 18,
    fontFamily: "Sen-Medium",
    textAlign: "center",
    paddingHorizontal: 10, 
  },
});
