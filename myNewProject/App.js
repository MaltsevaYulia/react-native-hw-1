import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  // KeyboardAvoidingView,
  // Platform,
  TouchableWithoutFeedback,Keyboard
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LoginScreen } from './Screens/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { PostsScreen } from './Screens/PostsScreen';
import { useFonts } from 'expo-font';

export default function App() {
   const [fontsLoaded] = useFonts({
     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
     'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
   });

   if (!fontsLoaded) {
     return null;
   }
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg}
          source={require('./assets/images/photo-bg.jpg')}
        >
          {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset="-147"
          > */}
            {/* <RegistrationScreen /> */}
            {/* <LoginScreen /> */}
            <PostsScreen/>
            <StatusBar style="auto" />
          {/* </KeyboardAvoidingView> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

});
