import { Button, Text, TextInput, View } from "react-native"

export const LoginScreen = () => {
    return (
      <View>
        <Text>Войти</Text>
        <TextInput />
        <TextInput />
        <Button text="Войти"/>
      </View>
    );
}