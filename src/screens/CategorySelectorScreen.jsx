import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryScreenHeader from '../components/CategoryScreenHeader'
import ItemList from '../components/ItemList'
import ItemData from '../../DummyData/ItemData'

const CategorySelectorScreen = () => {
  return (
    <View>
      <ScrollView>
        <ItemList Heading={'Our Foods'} />
        </ScrollView>
    </View>
  )
}

export default CategorySelectorScreen

const styles = StyleSheet.create({})