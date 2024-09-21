import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import img_3 from '../../assets/images/Img-1.png';
import img_4 from '../../assets/images/Img-2.png';
import { router } from 'expo-router';

const OnboardingScreen = () => {
  const swiperRef = useRef(null);
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(100);

  // Define the animated styles
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
      transform: [{ translateX: withTiming(translateX.value, { duration: 500 }) }],
    };
  });

  // Start animation when component mounts
  useEffect(() => {
    opacity.value = 1;
    translateX.value = 0;
  }, []);

  const resetAnimation = () => {
    opacity.value = 0;
    translateX.value = 100;
  };

  const handleNext = () => {
    resetAnimation();
    setTimeout(() => {
      swiperRef.current?.scrollBy(1); // Scroll to the next slide
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        activeDotColor="#FF642F"
        ref={swiperRef}
        onIndexChanged={() => {
          resetAnimation();
          setTimeout(() => {
            opacity.value = 1;
            translateX.value = 0;
          }, 500);
        }} // Reset and start animation when slide changes
      >
        {/* Slide 1 */}
        <View>
          <Animated.View style={[styles.slide, animatedStyle]}>
            <Image source={img_3} style={styles.placeholder} />
            <Text style={styles.title}>All your favorites</Text>
            <Text style={styles.text}>
              Get all your loved foods in one place, you just place the order we do the rest.
            </Text>
            <TouchableOpacity onPress={handleNext} style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Slide 2 */}
        <View>
          <Animated.View style={[styles.slide, animatedStyle]}>
            <Image source={img_4} style={styles.placeholder} />
            <Text style={styles.title}>Order from chosen chef</Text>
            <Text style={styles.text}>
              Select your favorite chef to prepare your meals with love and care.
            </Text>
            <TouchableOpacity onPress={handleNext} style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Slide 3 */}
        <View>
          <Animated.View style={[styles.slide, animatedStyle]}>
            <Image source={img_3} style={styles.placeholder} />
            <Text style={styles.title}>Free delivery offers</Text>
            <Text style={styles.text}>
              Enjoy free delivery on select orders for a limited time!
            </Text>
            <TouchableOpacity style={styles.button} onPress={()=> router.navigate('/Home')}>
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
  },
  placeholder: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
    fontFamily: 'Sen-Bold',
  },
  text: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'Sen-Medium',
  },
  button: {
    backgroundColor: '#FF642F',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Sen-Bold',
  },
});

export default OnboardingScreen;
