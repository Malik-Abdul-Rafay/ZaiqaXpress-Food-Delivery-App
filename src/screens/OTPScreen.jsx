import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import OTP_Image from '../../assets/images/OTP.png';
import Icon from 'react-native-vector-icons/Entypo';
import { router } from 'expo-router';

const OTPScreen = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(30);
    const inputs = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleOtpChange = (value, index) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOtp(newOTP);

        if (value && index < 3) {
            inputs.current[index + 1].focus();
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputs.current[index - 1].focus();
        }
    };

    const formattedTime = `${String(Math.floor(timer / 60)).padStart(2, '0')}:${String(timer % 60).padStart(2, '0')}`;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={()=>router.back()}>
                    <Icon name='chevron-small-left' size={30} color='#000' />
                </TouchableOpacity>

                <Image source={OTP_Image} style={styles.image} />

                <Text style={styles.heading}>OTP Verification</Text>

                <Text style={styles.description}>
                    We will send you one time password on this <Text style={styles.boldText}>Mobile Number</Text>
                </Text>
                <Text style={styles.phoneNumber}>+923322406126</Text>
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(el) => inputs.current[index] = el}
                            keyboardType='numeric'
                            maxLength={1}
                            value={digit}
                            onChangeText={(value) => handleOtpChange(value, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            textAlign='center'
                            style={styles.otpInput}
                        />
                    ))}
                </View>
                <Text style={styles.timer}>{formattedTime}</Text>
                <View style={styles.resendTextContainer}>
                    <Text style={styles.resendText}>Did not receive OTP?</Text>
                    <TouchableOpacity><Text style={styles.resendLink}>Send OTP</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={() => router.navigate('/Onboarding')}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginTextContainer}>
                <Text style={styles.loginText}>Already have an account?</Text>
                <TouchableOpacity><Text style={styles.loginLink}>Login</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default OTPScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F4'
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 20,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        width: 45,
        height: 45,
        backgroundColor: '#ECF0F4',
    },
    image: {
        width: '100%',
        height: '45%',
        resizeMode: 'contain',
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontFamily: 'Sen-Bold',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    description: {
        fontSize: 16,
        fontFamily: 'Sen-Regular',
        textAlign: 'center',
        color: '#4D4D4D',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    boldText: {
        fontFamily: 'Sen-Bold',
    },
    phoneNumber: {
        fontSize: 18,
        fontFamily: 'Sen-Medium',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 18,
        marginVertical: 13,
        paddingHorizontal: 20,
    },
    otpInput: {
        fontSize: 20,
        fontFamily: 'Sen-SemiBold',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        width: 50,
        height: 50,
        textAlign: 'center',
    },
    timer: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Sen-Regular',
        color: '#FF5733',
        letterSpacing: 2
    },
    resendTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        gap: 7,
    },
    resendText: {
        fontSize: 15,
        fontFamily: 'Sen-Regular',
        color: '#4D4D4D',
    },
    resendLink: {
        color: '#FF5733',
        fontFamily: 'Sen-Bold',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    submitButton: {
        backgroundColor: '#FF642F',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    submitButtonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Sen-Bold',
        fontSize: 18,
    },
    loginTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 7,
        marginTop: 20
    },
    loginText: {
        fontSize: 15,
        fontFamily: 'Sen-Regular',
        color: '#4D4D4D',
    },
    loginLink: {
        color: '#FF5733',
        fontFamily: 'Sen-Bold',
        fontSize: 15,
        textDecorationLine: 'underline'
    },
});