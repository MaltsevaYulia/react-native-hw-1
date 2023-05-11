import { View,Text } from "react-native"
import { AntDesign,Feather } from '@expo/vector-icons'; 
import { StyleSheet } from "react-native";

export const PostsScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Публикации</Text>
          <Feather name="log-out" size={24} color="black" />
        </View>
        <View style={styles.main}></View>
        <View style={styles.footer}>
          <Feather name="grid" size={24} color="black" />
          <AntDesign name="plus" size={24} color="black" />
          <Feather name="user" size={24} color="black" />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  header: {
    // height: 44,
      flex:0.1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 31,
    },
    main: {
        flex:0.8,
    },
  footer: {
    // height: 83,
      flex: 0.1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 31,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
});