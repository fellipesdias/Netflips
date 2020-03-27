import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  return (
    <View nativeID="container" style={styles.container}>
      <View nativeID="header" style={styles.header}>
        <Text style={styles.headertext}>N</Text>
      </View>
      <View nativeID="body" style={styles.body} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: 'black',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    alignItems: 'center',
  },
  headertext: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8C2D2E',
  },
  headerIcon: {
    color: '#fff',
    alignSelf: 'center',
  },
  BodyIcon: {
    color: '#fff',
    marginRight: 150,
    justifyContent: 'center',
  },
  bodytext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  images: {
    width: 100,
    height: 100,
  },
  textAddIcon: {
    color: '#fff',
    marginLeft: 5,
  },
  ProfileButton: {
    alignItems: 'center',
    margin: 30,
  },
  profileText: {
    color: '#fff',
    marginTop: 10,
  },
});
