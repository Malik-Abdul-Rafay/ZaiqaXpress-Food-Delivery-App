import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ItemData from '../../DummyData/ItemData'
import ItemList from '../components/ItemList'

const FavouritesScreen = () => {
  return (
    <ScrollView>
        <ItemList ListData={ItemData}/>
    </ScrollView>
  )
}

export default FavouritesScreen