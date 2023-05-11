import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LoginScreen } from './Screens/LoginScreen';
// import { useFonts } from 'expo-font';
import { RegistrationScreen } from './Screens/RegistrationScreen';

export default function App() {
  //  const [fontsLoaded] = useFonts({
  //    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  //  });

  //  if (!fontsLoaded) {
  //    return null;
  //  }
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require('./assets/images/photo-bg.jpg')}
      >
        {/* <RegistrationScreen /> */}
        <View style={styles.form}>
          <View style={styles.avaWrapper}>
            <View style={styles.addBtn}>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </View>
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput style={styles.input} placeholder="Логин" />
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passText}
              placeholder="Пароль"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              onPress={toggleShowPassword}
              style={styles.passwordToggle}
            >
              <Text style={styles.linkText}>
                {showPassword ? 'Скрыть' : 'Показать'}
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            leftIcon={
              <Icon
                name="lock"
                size={24}
                color="#000000"
                style={{ marginRight: 10 }}
              />
            }
            rightIcon={
              <TouchableOpacity onPress={toggleShowPassword}>
                <>
                  <Icon
                    name={showPassword ? 'eye-slash' : 'eye'}
                    size={24}
                    color="#000000"
                  />
                  <Text>{showPassword ? 'Скрыть' : 'Показать'}</Text>
                </>
              </TouchableOpacity>
            }
          /> */}
          {/* <View>
            <TouchableOpacity style={styles.show}>
              <Text style={styles.linkText}>Показать</Text>
            </TouchableOpacity>
          </View> */}
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
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
    // alignItems: 'center',
  },
  //RegistrationScreen styles:
  form: {
    // position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 25,
    flex: 0.7,
    // width: 375,
    // height: 549,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  avaWrapper: {
    position: 'absolute',
    width: 120,
    height: 120,
    backgroundColor: '#00ffff',
    borderRadius: 16,
    top: 0,
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  addBtn: {
    position: 'absolute',
    // borderColor: '#FF6C00',
    // borderRadius: '50%',
    // borderWidth: 1,
    // backgroundColor: '#FFFFFF',
    width: 25,
    height: 25,
    right: 0,
    bottom: 12,
    transform:[{translateX:12.5}]
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
    marginBottom: 32,
    textAlign: 'center',
  },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#F6F6F6',
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 19,
    marginHorizontal: 16,
    // position: 'relative',
  },
  btn: {
    backgroundColor: '#FF6C00',
    height: 40,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },
  show: {
    position: 'absolute',
    zIndex: 1,
    // top: '50%',
    right: 0,
  },
  linkText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#F6F6F6',
    marginHorizontal: 16,
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  passText: {
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 19,
  },
});
