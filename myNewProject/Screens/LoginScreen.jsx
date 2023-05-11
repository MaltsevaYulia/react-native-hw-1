import { Button, Text, TextInput, View } from "react-native"

export const LoginScreen = () => {
    return (
      <View>
        <Text>Войти</Text>
        <TextInput placeholder="Адрес электронной почты" />
        <TextInput placeholder="Пароль" secureTextEntry={true} />
        <Button text="Войти" />
      </View>
    );
}