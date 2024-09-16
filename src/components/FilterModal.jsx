import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';


export default function FilterModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPricing, setSelectedPricing] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openButton} onPress={() => setModalVisible(true)}>
      <Icon2 name="options-outline" size={25} color="#000" />

      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View  style={styles.modalViewTop}>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>

            <Text style={styles.modalTitle}>Filter your search</Text>
            </View>

            {/* OFFERS */}
            <Text style={styles.sectionTitle}>OFFERS</Text>
            <View style={styles.optionsRow}>
              {['Delivery', 'Pick Up', 'Offer', 'Online payment available'].map((offer, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedOffer === offer && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedOffer(offer)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedOffer === offer && styles.selectedText,
                    ]}
                  >
                    {offer}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* DELIVER TIME */}
            <Text style={styles.sectionTitle}>DELIVER TIME</Text>
            <View style={styles.optionsRow}>
              {['10-15 min', '20 min', '30 min'].map((time, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedTime === time && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedTime === time && styles.selectedText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* PRICING */}
            <Text style={styles.sectionTitle}>PRICING</Text>
            <View style={styles.optionsRow}>
              {['Low To High', 'Hign to Low'].map((price, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedPricing === price && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedPricing(price)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedPricing === price && styles.selectedText,
                    ]}
                  >
                    {price}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

          

            <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.filterButtonText}>FILTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: 45,
    height: 45,
    backgroundColor: '#ECF0F4',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewTop:{
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 45,
    height: 45,
    backgroundColor: '#ECF0F4',
  },
  closeButtonText: {
    fontSize: 18,
    fontFamily: 'Sen-Medium',
  },
  modalTitle: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'Sen-Bold',
  },
  sectionTitle: {
    fontSize: 15,
    marginTop: 15,
    color: '#7D7D7D',
    fontFamily: 'Sen-Bold', 
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 8,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: '#FF642F',
  },
  optionText: {
    fontSize: 15,
    color: '#7D7D7D',
    fontFamily: 'Sen-Medium', 
  },
  selectedText: {
    color: 'white',
    fontFamily: 'Sen-Bold',
  },

  filterButton: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#FF642F',
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    height: 50,
  },
  filterButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Sen-Bold', 
  },
});
