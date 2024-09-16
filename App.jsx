import react, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';



import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

 
export default function App() {
  const [fontsLoaded] = useFonts({
    'Sen-Bold': require('./assets/fonts/Sen-Bold.ttf'),
    'Sen-ExtraBold': require('./assets/fonts/Sen-ExtraBold.ttf'),
    'Sen-Medium': require('./assets/fonts/Sen-Medium.ttf'),
    'Sen-Regular': require('./assets/fonts/Sen-Regular.ttf'),
    'Sen-SemiBold': require('./assets/fonts/Sen-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>
    <HomeScreen />
    </>

  );
}

const styles = StyleSheet.create({
});
