import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';

const TYPING_SPEED = 200; // Adjust speed here

export default function Greeting() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hey Rafay Malik, Good Afternoon!";
  const typingAnimation = useSharedValue(0);
  const cursorOpacity = useSharedValue(1);

  useEffect(() => {
    const typing = () => {
      if (typingAnimation.value < fullText.length) {
        setDisplayedText(fullText.slice(0, typingAnimation.value + 1));
        typingAnimation.value += 1;
        setTimeout(typing, TYPING_SPEED);
      }
    };
    typing();

    // Cursor blinking effect
    cursorOpacity.value = withRepeat(
      withTiming(0, { duration: 200, easing: Easing.linear }),
      -1,
      true
    );
  }, []);

  const animatedCursorStyle = useAnimatedStyle(() => {
    return {
      opacity: cursorOpacity.value,
    };
  });

  // Determine the index where "Good Afternoon" starts
  const goodAfternoonIndex = fullText.indexOf('Good Afternoon');

  return (
    <View style={[styles.greetingContainer, styles.pH]}>
      <Text style={styles.greetingTextOuter}>
        {displayedText.slice(0, goodAfternoonIndex)}
        <Text style={styles.boldText}>{displayedText.slice(goodAfternoonIndex, goodAfternoonIndex + 'Good Afternoon'.length)}</Text>
        {displayedText.slice(goodAfternoonIndex + 'Good Afternoon'.length)}
        <Animated.Text style={[styles.cursor, animatedCursorStyle]}>|</Animated.Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pH: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingTextOuter: {
    fontSize: 16,
    fontFamily: 'Sen-Regular',
  },
  boldText: {
    fontSize: 16,
    fontFamily: 'Sen-Bold',
  },
  cursor: {
    fontSize: 16,
    fontFamily: 'Sen-Regular',
    marginLeft: 2,
  },
});
