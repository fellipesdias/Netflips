import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Perfis = ({navigation}) => {
  const users = [
    {
      id: 1,
      name: 'Jéssica',
      uri:
        'https://br.web.img2.acsta.net/r_640_360/newsv7/19/12/07/21/42/1848130.jpg',
    },
    {
      id: 2,
      name: 'Alberto',
      uri:
        'https://townsquare.media/site/442/files/2015/04/ddbig-630x420.jpg?w=980&q=75',
    },
    {
      id: 3,
      name: 'Juca',
      uri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqfxPmAp6XVOM8M3Uadg0_IOx8G6YRFamx0k5J4eno_oW9xjo&s',
    },
  ];

  return (
    <View nativeID="container" style={styles.container}>
      <View nativeID="header" style={styles.header}>
        <Text style={styles.headertext}>NETFLIPS</Text>
        <Icon name="edit" size={30} style={styles.headerIcon} />
      </View>
      <View nativeID="body" style={styles.body}>
        <Text style={styles.bodytext}>Quem está assistindo ?</Text>
        <FlatList
          numColumns={2}
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ProfileButton
              name={item.name}
              uri={item.uri}
              navigation={navigation}
            />
          )}
        />
        <View>
          <Icon name="add-circle" size={100} style={styles.BodyIcon} />
          <Text style={styles.textAddIcon}>Adcionar Perfil</Text>
        </View>
      </View>
    </View>
  );
};
const ProfileButton = ({name, uri, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.ProfileButton}
      onPress={() => navigation.navigate('Home')}>
      <Image style={styles.images} source={{uri}} />
      <Text style={styles.profileText}>{name}</Text>
    </TouchableOpacity>
  );
};
Perfis.navigationOptions = {
  title: 'Home',
};

export default Perfis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393939',
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
