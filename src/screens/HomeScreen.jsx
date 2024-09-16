import { ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ResturantsList from '../components/ResturantsList'
import Greeting from '../components/Greeting'
import SearchBar from '../components/SearchBar'
import CategorySelector from '../components/CategorySelector'
import RestaurantsData from '../../DummyData/RestaurantsData'


const HomeScreen = () => {
  return (
    <ScrollView>
    <View style={styles.mainContainer}>
        <SearchBar />
        <Greeting />
        <CategorySelector />
        <ResturantsList Heading={'Open Restaurants'} RestaurantsData={RestaurantsData} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer:{
    paddingVertical: 10.,
    backgroundColor:"#FFF"
  },
 
})