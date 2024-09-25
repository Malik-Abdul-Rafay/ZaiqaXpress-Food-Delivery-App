import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import loader from '../../assets/images/1496.gif'

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
    <Image source={loader} style={styles.loader}/>
    </View>

  )
}

export default Loader

const styles = StyleSheet.create({
  loaderContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  loader:{
    height: 60,
    width: 60,
    resizeMode: 'contain'
  }
})