import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ongoingOrders = [
  { id: '162432', restaurant: 'Pizza Hut', price: '$35.25', items: '03 Items', type: 'Food' },
  { id: '242432', restaurant: 'McDonald', price: '$40.15', items: '02 Items', type: 'Drink' },
  { id: '240112', restaurant: 'Starbucks', price: '$10.20', items: '01 Item', type: 'Drink' },
];

const historyOrders = [
  { id: '162432', restaurant: 'Pizza Hut', price: '$35.25', items: '03 Items', status: 'Completed', type: 'Food' },
  { id: '242432', restaurant: 'McDonald', price: '$40.15', items: '02 Items', status: 'Completed', type: 'Drink' },
  { id: '240112', restaurant: 'Starbucks', price: '$10.20', items: '01 Item', status: 'Canceled', type: 'Drink' },
];

const MyOrdersScreen = () => {
  const [tab, setTab] = useState('ongoing');

  const renderOngoingOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderType}>{item.type}</Text>
      <View style={styles.detailContainer}>
      <View style={styles.placeholder} />
      <View style={styles.orderDetails}>
        <View>
          <Text style={styles.orderTitle}>{item.restaurant}</Text>
          <View style={styles.priceItemContainer}>
          <Text style={styles.orderPrice}>{item.price}</Text>
          <Text style={styles.orderPrice}>|</Text>
          <Text style={styles.orderMeta}>{item.items}</Text>
          </View>
        </View>
        <Text style={styles.orderId}>#{item.id}</Text>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.trackOrderButton}>
          <Text style={styles.trackOrderText}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelOrderButton}>
          <Text style={styles.cancelOrderText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHistoryOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderType}>{item.type}</Text>
      <View style={styles.detailContainer}>
      <View style={styles.placeholder} />
      <View style={styles.orderDetails}>
        <View>
          <Text style={styles.orderTitle}>{item.restaurant}</Text>
          <View style={styles.priceItemContainer}>
          <Text style={styles.orderPrice}>{item.price}</Text>
          <Text style={styles.orderPrice}>|</Text>
          <Text style={styles.orderMeta}>{item.items}</Text>
          </View>
        </View>
        <Text style={styles.orderId}>#{item.id}</Text>
      </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={[styles.statusButton, item.status === 'Completed' ? styles.completed : styles.canceled]}>
          <Text style={[styles.statusText, item.status === 'Completed' ? styles.completedText : styles.canceledText]}>{item.status}</Text>
        </TouchableOpacity>
        <View style={styles.rateReorderButtons}>
          <TouchableOpacity style={styles.rateButton}>
            <Text style={styles.rateButtonText}>Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.reorderButton}>
            <Text style={styles.reorderButtonText}>Re-Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setTab('ongoing')} style={[styles.tab, tab === 'ongoing' && styles.activeTab]}>
          <Text style={[styles.tabText, tab === 'ongoing' && styles.activeTabText]}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTab('history')} style={[styles.tab, tab === 'history' && styles.activeTab]}>
          <Text style={[styles.tabText, tab === 'history' && styles.activeTabText]}>History</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      {tab === 'ongoing' ? (
        <FlatList
          data={ongoingOrders}
          renderItem={renderOngoingOrder}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={historyOrders}
          renderItem={renderHistoryOrder}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF642F', 
  },
  tabText: {
    fontFamily: 'Sen-Regular',
    fontSize: 16,
    color: '#9CA3AF',
  },
  activeTabText: {
    fontFamily: 'Sen-Bold',
    color: '#FF642F',
  },
  orderCard: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  detailContainer:{
    flexDirection: 'row',
    gap:12,
  },
  placeholder: {
    width: 80,
    height: 80,
    backgroundColor: '#D1D5DB',
    borderRadius: 9,
    marginBottom: 8,
  },
  orderType: {
    fontFamily: 'Sen-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom:12
  },
  orderDetails: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceItemContainer:{
    flexDirection:'row',
    alignItems: 'center',
    gap: 7
  },
  orderTitle: {
    fontFamily: 'Sen-SemiBold',
    fontSize: 18,
    marginBottom: 12
  },
  orderPrice: {
    fontFamily: 'Sen-Medium',
    fontSize: 16,
    color: '#6B7280',
  },
  orderMeta: {
    fontFamily: 'Sen-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  orderId: {
    fontFamily: 'Sen-Regular',
    fontSize: 12,
    color: '#9CA3AF',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  trackOrderButton: {
    backgroundColor: '#FF642F',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  trackOrderText: {
    fontFamily: 'Sen-Bold',
    color: '#FFFFFF',
    fontSize: 14,
  },
  cancelOrderButton: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  cancelOrderText: {
    fontFamily: 'Sen-Regular',
    color: '#6B7280',
    fontSize: 14,
  },
  statusButton: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth: 1,
  },
  completed: {
    borderColor: '#10B981',
  },
  canceled: {
    borderColor: '#EF4444',
  },
  statusText: {
    fontFamily: 'Sen-Regular',
    fontSize: 14,
  },
  completedText: {
    color: '#10B981',
  },
  canceledText: {
    color: '#EF4444',
  },
  rateReorderButtons: {
    flexDirection: 'row',
  },
  rateButton: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginRight: 8,
  },
  rateButtonText: {
    fontFamily: 'Sen-Regular',
    color: '#6B7280',
  },
  reorderButton: {
    backgroundColor: '#FF642F',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  reorderButtonText: {
    fontFamily: 'Sen-Bold',
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default MyOrdersScreen;
