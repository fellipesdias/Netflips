import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
/*import Icon from 'react-native-vector-icons/FontAwesome';*/

const Perfis = () => {
  return (
    <View nativeID="container" style={styles.container}>
      <View nativeID="header" style={styles.header}>
        <Text style={styles.headertext}>NETFLIPS</Text>
      </View>
      <View nativeID="body" style={styles.form}></View>
    </View>
  );
};

export default Perfis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    alignItems: 'flex-start',
    padding: 30,
  },
  headertext: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8C2D2E',
  },
  form: {
    justifyContent: 'center',
    backgroundColor: '#393939',
    height: 750,
    width: 750,
  },
});
