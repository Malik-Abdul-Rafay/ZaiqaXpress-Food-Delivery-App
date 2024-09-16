import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantList from '../components/ResturantsList'
import RestaurantsData from '../../DummyData/RestaurantsData'

const RestaurantsScreen = () => {
  return (
    <View style={styles.container}>
    <RestaurantList  RestaurantsData={RestaurantsData} />
    </View>
  )
}

export default RestaurantsScreen

const styles = StyleSheet.create({
})