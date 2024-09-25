import { StyleSheet, Text, Image, View, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function SearchBar() {
    // Create a shared value for scaling
    const scale = useSharedValue(0);

    // Trigger the animation when the component mounts
    useEffect(() => {
        scale.value = withTiming(1, {
            duration: 300,
            easing: Easing.out(Easing.exp),
        });
    }, [scale]);

    // Define the animated style
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={[styles.searchContainer, animatedStyle]}>
                <Icon1 name="search" size={22} color="black" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search dishes, restaurants"
                    keyboardType='web-search'
                />
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
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
        marginVertical: 10,
    },
    searchInput: {
        width: 260,
        fontSize: 16.5,
        color: 'black',
        fontFamily: 'Sen-Regular',
    },
});

