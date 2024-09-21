import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from 'react-native';
import img_1 from '../../assets/images/Logo-2.png'
import { Link, router } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <ScrollView  contentContainerStyle={styles.scrollContent}>
      <View style={styles.infoContainer}>
      <Image style={styles.placeholderImage} source={img_1}/>
      <Text style={styles.title}><Text style={styles.firstLetter}>Z</Text>AIQA<Text style={styles.title2}><Text style={styles.firstLetter}>X</Text>PRESS</Text></Text>
      <Text style={styles.subtitle}>
        Hunger and opportunity can come anytime, but we're always ready!
      </Text>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.loginButton} onPress={()=>router.navigate('SignPage')}>
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>SIGN UP</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow:1,
    justifyContent:'center',
    backgroundColor: '#E64A19', 
    paddingHorizontal: 20,
  },
  infoContainer:{
    alignItems: 'center',
    
  },
  placeholderImage: {
    width: 160,
    height: 160,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 30,
    color: '#F5CB58',
    fontFamily: 'Sen-ExtraBold',
    letterSpacing:2
  },
  title2:{
    fontFamily: 'Sen-SemiBold',
    color:"#fff"
  },
  firstLetter:{
    fontSize: 48,
  },
  subtitle: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 100,
    paddingHorizontal: 30,
    fontFamily: 'Sen-SemiBold',
    letterSpacing:0.5,
    marginTop:5,
    lineHeight:22
  },
  buttonContainer:{
    width: '100%',
    marginTop: 15
  },
  loginButton: {
    backgroundColor: '#F8D559',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
  },
  signUpButton: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    width: '100%',
  },
  loginText: {
    fontSize: 19,
    color: '#D84315',
    fontFamily: 'Sen-ExtraBold',
    textAlign: 'center'
  },
  signUpText: {
    fontSize: 19,
    color: '#D84315',
    fontFamily: 'Sen-ExtraBold',
    textAlign: 'center'
  },
});

export default WelcomeScreen;