import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публикации</Text>
        <View style={styles.iconContainer}>
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </View>
      </View>
      <View style={styles.main}><Image/></View>
      <View style={styles.footer}>
        <Feather name="grid" size={24} color="#212121" />
        <TouchableOpacity style={styles.btn}>
          <AntDesign name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Feather name="user" size={24} color="#212121" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // height: 44,
    flex: 0.1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // gap: 31,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    // paddingBottom: 10,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    color: '#212121',
  },
  iconContainer: {
    position: 'absolute',
    right: 16,
  },
  main: {
    flex: 0.8,
    backgroundColor: '#fff',
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
  btn: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
