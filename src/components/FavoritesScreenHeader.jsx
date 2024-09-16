import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/Entypo';
import { useRouter } from 'expo-router'; 

const FavoritesScreenHeader = () => {
  const router = useRouter(); 

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}> 
            <View style={styles.chevronIconContainer}>
              <Icon1 name="chevron-small-left" size={30} color="#000" />
            </View>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Favourites</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom:15,
    backgroundColor: '#fff',
        // Add shadow for iOS
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Add elevation for Android
        elevation: 5,

  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  chevronIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: 45,
    height: 45,
    backgroundColor: '#ECF0F4',
  },
  headerTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Sen-Bold',
  },
});

export default FavoritesScreenHeader;
