import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import cash from '../../../assets/images/cash.png';
import visa from '../../../assets/images/visa.png';
import master_card from '../../../assets/images/master card.png';
import paypal from '../../../assets/images/paypal.png';
import emptyCard from '../../../assets/images/empty card.png';


const PaymentScreen = () => {
  const [selectedOption, setSelectedOption] = useState('Mastercard');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const isSelected = (option) => selectedOption === option;

  return (
    <ScrollView>
    <View style={styles.container}>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.paymentOptions}>
        
        <TouchableOpacity
          style={[styles.optionButton, isSelected('Cash') && styles.optionButtonSelected]}
          onPress={() => handleOptionPress('Cash')}
        >
          <View style={styles.optionImageContainer}>
            <Image source={cash} style={styles.optionImage} />
          </View>
          {isSelected('Cash') && (
            <View style={styles.checkIconContainer}>
              <Icon1 name="check" size={16} color="#fff" style={styles.checkIcon} />
            </View>
          )}
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.optionButton, isSelected('Visa') && styles.optionButtonSelected]}
          onPress={() => handleOptionPress('Visa')}
        >
          <View style={styles.optionImageContainer}>
            <Image source={visa} style={styles.optionImage} />
          </View>
          {isSelected('Visa') && (
            <View style={styles.checkIconContainer}>
              <Icon1 name="check" size={16} color="#fff" style={styles.checkIcon} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.optionButton, isSelected('Mastercard') && styles.optionButtonSelected]}
          onPress={() => handleOptionPress('Mastercard')}
        >
          <View style={styles.optionImageContainer}>
            <Image source={master_card} style={styles.optionImage} />
          </View>
          {isSelected('Mastercard') && (
            <View style={styles.checkIconContainer}>
              <Icon1 name="check" size={16} color="#fff" style={styles.checkIcon} />
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            isSelected('Paypal') && styles.optionButtonSelected,
            { marginRight: 40 },
          ]}
          onPress={() => handleOptionPress('Paypal')}
        >
          <View style={styles.optionImageContainer}>
            <Image source={paypal} style={styles.optionImage} />
          </View>
          {isSelected('Paypal') && (
            <View style={styles.checkIconContainer}>
              <Icon1 name="check" size={16} color="#fff" style={styles.checkIcon} />
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.cardContainer}>
        <View style={styles.cardPlaceholder}>
          <Image
            source={emptyCard}
            style={styles.masterCardImage}
          />
        </View>
        <Text style={styles.noCardText}>No master card added</Text>
        <Text style={styles.addCardText}>You can add a Mastercard and save it for later</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <View style={styles.addButtonTextContainer}>
          <Icon1 name="plus" size={26} color="#FF642F" />
          <Text style={styles.addButtonText}>ADD NEW</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.totalTextContainer}>
        <Text style={styles.totalText}>TOTAL:  </Text>
        <Text style={styles.totalTextValue}>$96</Text>
        </View>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>PAY & CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20
    
  },

  PaymentText: {
    fontSize: 20,
    fontFamily: 'Sen-Bold',
  },
  paymentOptions: {
    paddingLeft: 20,
  },
  optionButton: {
    width: 90,
    height: 80,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF0F4',
    marginRight: 15,
    position: 'relative', 
  },
  optionButtonSelected: {
    borderColor: '#FF642F',
    backgroundColor: '#FFF',
  },
  optionImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionImage: {
    height: 40,
    width: 60,
    resizeMode: 'contain',
  },
  checkIconContainer: {
    position: 'absolute',
    top: -3,
    right: -6,
    backgroundColor: '#FF642F',
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2, 
    borderColor: '#FFF', 
  },
  checkIcon: {
    alignSelf: 'center',
  },
  cardContainer: {
    backgroundColor: '#ECF0F4',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop:20,
  },
  cardPlaceholder: {
    width: 260,
    height: 160,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#E5E5E5',
  },
  masterCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#ECF0F4',

  },
  noCardText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Sen-SemiBold',
  },
  footer:{
    // paddingBottom: 0
  },
  addCardText: {
    color: '#565555',
    fontSize: 15,
    fontFamily: 'Sen-Medium',
    textAlign: 'center',
    marginTop: 6
  },
  addButton: {
    backgroundColor: '#ECF0F4',
    borderRadius: 13,
    paddingVertical: 17,
    marginHorizontal:20,
    borderWidth: 1.5,
    borderColor: '#E5E5E5',
    marginBottom: 20
    

  },
  addButtonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap:6
  },
  addButtonText: {
    color: '#FF642F',
    fontSize: 16,
    fontFamily: 'Sen-Bold',
  },
  totalTextContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20

  },
  totalText: {
    fontSize: 23,
    marginTop: 20,
    fontFamily: 'Sen-Medium',
    marginBottom: 20,
    color: '#000',
  },
  totalTextValue:{
    fontSize: 30,
    fontFamily: 'Sen-SemiBold',
  },
  confirmButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF642F',
    paddingVertical: 17,
    borderRadius: 13,
    marginHorizontal: 20,
    marginBottom: 20

  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Sen-Bold',

  },
});

export default PaymentScreen;

