import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
import {movies} from '../mock';

const Home = () => {
  const m1 = [...movies].sort(() => 0.5 - Math.random());
  const m2 = [...movies].sort(() => 0.2 - Math.random());
  return (
    <View nativeID="container" style={styles.container}>
      <ImageBackground
        source={{
          uri:
            'https://comal4series.blackbygreen.fr/wp-content/uploads/2019/01/serie-dark-netflix-600x400.jpg',
        }}
        nativeID="header"
        style={styles.header}>
        <Text style={styles.Logotext}>N</Text>
      </ImageBackground>
      <View nativeID="body" style={styles.body} />
      <Text style={styles.TextImages}>Escolhas para você</Text>
      <FlatList
        horizontal
        data={m1}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MoviesList
            title={item.title}
            uri={item.uri}
            infolink={item.infolink}
          />
        )}
      />
      <Text style={styles.TextImages}>Assistidos recentemente</Text>
      <FlatList
        horizontal={true}
        data={m2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MoviesList
            title={item.title}
            uri={item.uri}
            infolink={item.infolink}
          />
        )}
      />
    </View>
  );
};
const MoviesList = ({infolink, uri, title}) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(infolink)}>
      <Image style={styles.ScrollImages} source={{uri}} />
      <Text style={styles.MovieText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: 300,
    width: Dimensions.get('window').width,
    backgroundColor: 'green',
  },
  body: {
    justifyContent: 'flex-start',
  },
  Logotext: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#8C2D2E',
    marginLeft: 15,
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
  ScrollImages: {
    width: 150,
    height: 200,
    marginHorizontal: 5,
  },
  TextImages: {
    fontSize: 17,
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
  MovieText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
  },
});
