import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryScreenHeader from '../components/CategoryScreenHeader'
import ItemList from '../components/ItemList'

const CategorySelectorScreen = () => {
  return (
    <View>
      <ScrollView>
        <ItemList Heading={'Menu'} />
        </ScrollView>
    </View>
  )
}

export default CategorySelectorScreen

const styles = StyleSheet.create({})