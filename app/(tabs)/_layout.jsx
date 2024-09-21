import { Tabs } from 'expo-router'
import React from 'react'
import HomeScreenHeader from '../../src/components/HomeScreenHeader'
import BackHeader from '../../src/components/BackHeader'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: "#FF642F",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        height: 60,
        elevation: 50,
        shadowColor: "#000",
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 6,
      },
      tabBarLabelStyle: {
        display: "none"
      }
    }}>
      <Tabs.Screen name='Home' options={{
        header: () => <HomeScreenHeader />,
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name={focused ? "home" : "home-outline"} size={25} color={color} />
        ),
      }} />
      <Tabs.Screen
        name="(RestaurantsDetail)"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? "restaurant" : "restaurant-outline"} size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen name='Cart' options={{
        header: () => <BackHeader title={'Cart'} />,
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name={focused ? "cart" : "cart-outline"} size={25} color={color} />
        ),
      }} />
<Tabs.Screen
  name='(Orders)'
  options={{
    header: () => <BackHeader title={'My Orders'} />,
    tabBarIcon: ({ focused, color }) => (
      <Ionicons name={focused ? "receipt" : "receipt-outline"} size={25} color={color} />
    ),
  }}
/>

      <Tabs.Screen name='(Profile)' options={{
          headerShown: false,
        // header: () => <BackHeader title={'Profile'} />,
        tabBarIcon: ({ focused, color }) => (
          <FontAwesome name={focused ? "user-circle" : "user-circle-o"} size={25} color={color} />
        ),
      }} />
    </Tabs>
  )
}

export default _layout