import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export const RegistrationScreen = () => {
  return (
    <View slyle={styles.form}>
      <Text style={styles.text}>Регистрация</Text>
      <TextInput slyle={styles.input} placeholder="Логин" />
      <TextInput slyle={styles.input} placeholder="Адрес электронной почты" />
      <TextInput
        slyle={styles.input}
        placeholder="Пароль"
        secureTextEntry={true}
      />
      <Button title="Зарегистрироваться" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    width: 375,
    height: 549,
    // padding: '92 16',
  },
  text: {
    fontSize: 30,
    fontWeight: 500,
    color: '#212121',
  },

  input: {
    backgroundColor: '#F6F6F6',
    marginHorizontal: 16,
    color: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    borderColor: '#E8E8E8',
  },
});
