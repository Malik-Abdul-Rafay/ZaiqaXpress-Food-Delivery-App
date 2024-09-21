import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router"; // useRouter for navigation
import CartContextProvider from "../src/context/CartContext";

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

const _layout = () => {
  const [fontsLoaded] = useFonts({
    'Sen-Bold': require('../assets/fonts/Sen-Bold.ttf'),
    'Sen-ExtraBold': require('../assets/fonts/Sen-ExtraBold.ttf'),
    'Sen-Medium': require('../assets/fonts/Sen-Medium.ttf'),
    'Sen-Regular': require('../assets/fonts/Sen-Regular.ttf'),
    'Sen-SemiBold': require('../assets/fonts/Sen-SemiBold.ttf'),
  });

  const router = useRouter();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CartContextProvider>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="SignPage" options={{ headerShown: false }} />
        <Stack.Screen name="OTP" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </CartContextProvider>
  );
};

export default _layout;
