import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView,
  StatusBar
} from 'react-native';
import Checkbox from 'expo-checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button_1 from '../../assets/images/Button-1.png';
import Button_2 from '../../assets/images/Button-2.png';
import Button_3 from '../../assets/images/Button-3.png';
import Vector from '../../assets/images/Vector.png';
import Ellipse from '../../assets/images/Ellipse.png';
import { router } from 'expo-router';



const SignInAndSignUpScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor="#FF642F" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{isSignInActive ? 'Sign In' : 'Sign Up'}</Text>
        <Text style={styles.headerSubtitle}>
          {isSignInActive
            ? 'Please sign in to your existing account'
            : 'Please sign up to get started'}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.formContainer}>
          {!isSignInActive && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#A0A5BA"
                onChangeText={setName}
                value={name}
              />
            </View>
          )}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              placeholderTextColor="#A0A5BA"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          {!isSignInActive && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#A0A5BA"
                keyboardType="number-pad"
                onChangeText={setPhone}
                value={phone}
              />
            </View>
          )}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#A6A6A6"
                secureTextEntry={!isPasswordVisible}
                onChangeText={setPassword}
                value={password}
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Icon
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={24}
                  color="#A6A6A6"
                />
              </TouchableOpacity>
            </View>
          </View>
          {!isSignInActive && (
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#A6A6A6"
                  secureTextEntry={!isPasswordVisible}
                  onChangeText={setConfirmPassword}
                  value={confirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIconContainer}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Icon
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    size={24}
                    color="#A6A6A6"
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={styles.optionsContainer}>
            {isSignInActive && (
              <View style={styles.rememberMeForgetContainer}>
                <TouchableOpacity
                  onPress={() => setIsChecked(!isChecked)}
                  style={styles.checkboxWrapper}
                >
                  <Checkbox style={styles.checkbox} value={isChecked} />
                  <Text style={styles.checkboxLabel}>Remember Me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity style={styles.loginButton}
              onPress={()=> router.navigate('/OTP')}
            >
              <Text style={styles.loginText}>{isSignInActive ? 'Sign In' : 'Sign Up'}</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText1}>
                {isSignInActive ? "Don't have an account?" : 'Already have an account?'}
              </Text>
              <TouchableOpacity onPress={() => setIsSignInActive(!isSignInActive)}>
                <Text style={styles.signUpText2}>
                  {isSignInActive ? 'Sign Up' : 'Sign In'}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.orContainer}>OR</Text>
            <View style={styles.iconMainContainer}>
              <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={Button_1} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={Button_2} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Image style={styles.icon} source={Button_3} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  headerContainer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    marginTop: 110,
  },
  headerTitle: {
    fontFamily: 'Sen-Bold',
    fontSize: 35,
  },
  headerSubtitle: {
    fontFamily: 'Sen-Regular',
    fontSize: 16,
    marginTop: 5,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    flexDirection: 'column',
    gap: 22,
  },
  inputContainer: {},
  inputLabel: {
    color: '#000',
    fontFamily: 'Sen-Medium',
    textTransform: 'uppercase',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Sen-Medium',
    backgroundColor: '#F0F5FA',
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 60,
    fontSize: 16,
    letterSpacing: 1,
    borderRadius: 8,
    width: '100%'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
  },
  optionsContainer: {
    marginTop: 20,
  },
  rememberMeForgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 5,
  },
  checkboxLabel: {
    fontFamily: 'Sen-Medium',
    fontSize: 14,
    color: '#7E8A97',
  },
  forgotPassword: {
    fontFamily: 'Sen-Medium',
    color: '#FF642F',
    fontSize: 14,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF642F',
    height: 50,
    borderRadius: 12,
  },
  loginText: {
    fontFamily: 'Sen-SemiBold',
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText1: {
    fontFamily: 'Sen-Medium',
    fontSize: 16,
    color: '#7E8A97',
  },
  signUpText2: {
    fontFamily: 'Sen-Medium',
    color: '#FF642F',
    fontSize: 16,
  },
  orContainer: {
    fontSize: 18,
    fontFamily: 'Sen-Medium',
    textAlign: 'center',
    marginVertical: 20,
  },
  iconMainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  iconContainer: {},
  icon: {
    width: 65,
    height: 65,
    objectFit: 'contain',
  },
});
export default SignInAndSignUpScreen;