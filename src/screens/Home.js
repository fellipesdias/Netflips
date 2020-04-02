import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Dimensions,
} from 'react-native';

export const MoviesList = () => {
  return (
    <ScrollView horizontal={true} decelerationRate="normal">
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Interstellar')
        }>
        <Image
          source={{
            uri:
              'https://lojasaraiva.vteximg.com.br/arquivos/ids/12105538/1002443202.jpg?v=637142234580400000',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Arrival_(filme)')
        }>
        <Image
          source={{
            uri:
              'https://cdn.collider.com/wp-content/uploads/2016/08/arrival-poster-venezuela.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/The_Shining')
        }>
        <Image
          source={{
            uri:
              'https://media.fstatic.com/_dg-XrRx0M-cKCd4i0ZcOdA2aaY=/fit-in/290x478/smart/media/movies/covers/2011/08/4f6f13256d22a6c0722ef6754705fcd6.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/It_(1990)')
        }>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/pt/thumb/3/34/It_1990.jpg/280px-It_1990.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://pt.wikipedia.org/wiki/Matrix')}>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/6b/97/ba/6b97ba20fade10689770730753193ce9.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is:_As_Duas_Torres',
          )
        }>
        <Image
          source={{
            uri:
              'https://conteudo.imguol.com.br/c/entretenimento/52/2019/10/24/poster-de-o-senhor-dos-aneis-as-duas-torres-1571924439836_v2_1280x1920.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/O_Exorcista')
        }>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/en/7/7b/Exorcist_ver2.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Ghost_in_the_Shell')
        }>
        <Image
          source={{
            uri:
              'https://lojasaraiva.vteximg.com.br/arquivos/ids/8400206/1008168915.jpg?v=637100534874230000',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Stigmata_(filme)')
        }>
        <Image
          source={{
            uri:
              'https://media.fstatic.com/UCjxG4m1nqyE87nr6pimIqGlprs=/fit-in/290x478/smart/media/movies/covers/2012/04/b60001b6f496386b078201caed10cea6.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Pet_Sematary_(filme)')
        }>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/pt/b/be/Cemit%C3%A9rio_maldito.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://en.wikipedia.org/wiki/Inception')
        }>
        <Image
          source={{
            uri:
              'https://media.fstatic.com/MaE3DOhc2xF6iw_EgOYxR39H_wE=/fit-in/290x478/smart/media/movies/covers/2011/06/7c49092a6e7223cebd5bd8dfd579b6e6.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Pulp_Fiction')
        }>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/75/b4/9e/75b49ec4073b178e9bfc75308a763e5b.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/O_Predador')
        }>
        <Image
          source={{
            uri:
              'https://ringostrack.com/bundles/soundtrackindex/img/cover/37850_predator.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Get_Out')
        }>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/5d/d5/a3/5dd5a3f07446bae04dda9cef5a88df37.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Akira_(filme)')
        }>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/pt/d/d8/Akira_p%C3%B4ster.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/N%C3%B3s_(filme)')
        }>
        <Image
          source={{
            uri:
              'https://media.fstatic.com/8WLDJq9eLOvviGuuGIkgN9rAvOY=/fit-in/290x478/smart/media/movies/covers/2019/02/US_INTL_DGTL_LUPITA_1_SHT_OV-br2.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Fight_Club')
        }>
        <Image
          source={{
            uri:
              'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://pt.wikipedia.org/wiki/Star_Wars:_Episode_VI_%E2%80%93_Return_of_the_Jedi',
          )
        }>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/220px-ReturnOfTheJediPoster1983.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Cool_World')
        }>
        <Image
          source={{
            uri:
              'https://i.pinimg.com/originals/32/17/77/32177795858f3bc1ab2c6fc5ca7e9add.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Walk_the_Line')
        }>
        <Image
          source={{
            uri:
              'https://br.web.img2.acsta.net/medias/nmedia/18/89/61/89/20169451.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Dead_Poets_Society')
        }>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/pt/thumb/0/04/Dead_Poets_Society.jpg/200px-Dead_Poets_Society.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://pt.wikipedia.org/wiki/Batman:_The_Dark_Knight_Returns_(filme)',
          )
        }>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/en/e/e9/Batman_The_Dark_Knight_Returns_%28film%29.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            'https://pt.wikipedia.org/wiki/Batman:_The_Dark_Knight_Returns_(filme)',
          )
        }>
        <Image
          source={{
            uri:
              'https://4.bp.blogspot.com/-sZGTOVHxSv4/ULJYt5UbrVI/AAAAAAAAMD4/CTWwHbP9gTY/s1600/batman-2-dvd.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://pt.wikipedia.org/wiki/Eu_Sou_a_Lenda')
        }>
        <Image
          source={{
            uri:
              'https://resizing.flixster.com/_uXCbZqkmeQ2J2tcxsjH6f4WQiM=/206x305/v1.bTsxMTE2Njc4MDtqOzE4NDQ0OzEyMDA7ODAwOzEyMDA',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://pt.wikipedia.org/wiki/Rocky')}>
        <Image
          source={{
            uri:
              'https://i1.wp.com/setimacena.com/wp-content/uploads/2014/05/Rocky-Balboa-poster.jpg',
          }}
          style={styles.ScrollImages}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const Home = () => {
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
      <MoviesList />
      <Text style={styles.TextImages}>Assistidos recentemente</Text>
      <MoviesList />
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
    marginRight: 20,
  },
  TextImages: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
});
