import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';
import { RegistrationScreen } from './Screens/RegistrationScreen';

export default function App() {
  //  const [fontsLoaded] = useFonts({
  //    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  //  });

  //  if (!fontsLoaded) {
  //    return null;
  //  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require('./assets/images/photo-bg.jpg')}
      >
        <RegistrationScreen />
        {/* <Text>Open up App.js to start working on your app!</Text> */}
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
    // justifyContent: 'center',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
