import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import menu from '../../assets/images/Menu.png';
import Icon1 from 'react-native-vector-icons/AntDesign';
import img_3 from '../../assets/images/Icon.png';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native'; 

export default function HomeScreenHeader() {
  const router = useRouter();
  const navigation = useNavigation(); 

  return (
    <View style={styles.HomeScreenHeader}>
      <View style={styles.menuAddressContainer}>
        <TouchableOpacity
          style={styles.menuIconContainer}
          onPress={() => navigation.openDrawer()} 
        >
          <Image source={menu} style={styles.menuIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.deliveryInfo} onPress={() => {}}>
          <Text style={styles.deliveryText}>DELIVER TO</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>Kharadar Police Li..</Text>
            <Icon1 name="caretdown" size={13} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addToCartCounter} onPress={() => router.push('/Cart')} activeOpacity={1.6}>
        <View style={styles.itemCountContainer}>        
          <Text style={styles.itemCount}>2</Text>
        </View>
        <View style={styles.cartContainer}>
          <Image source={img_3} style={styles.cartIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeScreenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 21,
  },
  menuIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f4',
    borderRadius: 50,
    width: 45,
    height: 45,
    position: 'relative',
  },
  menuIcon: {
    width: 18,
    height: 16,
  },
  deliveryText: {
    fontSize: 15,
    color: '#FF642F',
    fontFamily: 'Sen-Bold',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  addressText: {
    fontSize: 14,
    color: '#676767',
    fontFamily: 'Sen-Regular',
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 50,
    width: 45,
    height: 45,
    position: 'relative',
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
  itemCountContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 23,
    height: 23,
    borderRadius: 50,
    backgroundColor: '#FFF',
    position: 'absolute',
    zIndex: 1,
    right: 0,
    backgroundColor:"#FF642F"
  },
  itemCount: {
    color: '#FFF',
    fontSize: 15,
    fontFamily: 'Sen-Bold',
  },
});
