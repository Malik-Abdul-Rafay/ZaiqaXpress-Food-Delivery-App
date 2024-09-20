import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
      <Image style={styles.avatar} source={{ uri: "https://ideogram.ai/assets/image/lossless/response/qX4JYdC4RW-TyeQ7_9VQmw" }} />

        <Text style={styles.profileName}>Abdul Rafay Malik</Text>
        <Text style={styles.profileDesc}>App Develper Name</Text>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoItem}>
          <Feather name="user" size={24} color="#FC6464" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>FULL NAME</Text>
            <Text style={styles.value}>Abdul Rafay Malik</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Feather name="mail" size={24} color="#5E6EFD" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>EMAIL</Text>
            <Text style={styles.value}>malikabdulrafay290@gmail.com</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Feather name="phone" size={24} color="#4AD095" />
          <View style={styles.infoTextContainer}>
            <Text style={styles.label}>PHONE NUMBER</Text>
            <Text style={styles.value}>408-841-0926</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    profileContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 32,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
      backgroundColor: "#ecf0f4",
    },
    profileName: {
      fontFamily: 'Sen-Bold',
      fontSize: 20,
      color: '#2E2E2E',
    },
    profileDesc: {
      fontFamily: 'Sen-Regular',
      color: '#B0B0B0',
      fontSize: 14,
      marginTop: 4,
    },
    infoCard: {
      backgroundColor: '#F5F7FB',
      borderRadius: 16,
      padding: 16,
      marginHorizontal: 16,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
    },
    infoTextContainer: {
      marginLeft: 12,
    },
    label: {
      fontFamily: 'Sen-SemiBold',
      fontSize: 12,
      color: '#9C9C9C',
    },
    value: {
      fontFamily: 'Sen-Medium',
      fontSize: 16,
      color: '#4A4A4A',
    },
  });
export default ProfileScreen;
