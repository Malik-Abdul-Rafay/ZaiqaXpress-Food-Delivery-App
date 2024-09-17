import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantList from '../components/ResturantsList'

const RestaurantsScreen = () => {
  return (
    <View style={styles.container}>
    <RestaurantList  />
    </View>
  )
}

export default RestaurantsScreen
 
const styles = StyleSheet.create({
})