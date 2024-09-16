import { StyleSheet, Text,Image, View , TextInput} from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons';



export default function SearchBar() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
                <Icon1 name="search" size={22} color="black" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search dishes, resturants"
                    keyboardType='web-search'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: '#fff',
  },
  searchContainer: {
    backgroundColor: '#ecf0f4',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderRadius: 8,
    height: 60,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginVertical: 10
  },
  searchInput: {
    width: 260,
    fontSize: 16.5,
    color: 'black',
    fontFamily: 'Sen-Regular',
  },
});
