import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const login = () => {
    setMsg('');
    if (!user || !password) {
      setMsg('Credenciais inválidas');
      return;
    }
    setLoading(true);

    new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      setLoading(false);
      navigation.navigate('Perfis');
    });
  };

  return (
    <View nativeID="container" style={styles.container}>
      <View nativeID="body" style={styles.form}>
        <Text style={styles.bodyText}>ENTRAR</Text>

        <Text style={styles.Errortext}>{msg}</Text>
        <TextInput
          returnKeyType="next"
          keyboardType="email-address"
          style={styles.input}
          placeholder="Email ou Número de telefone"
          placeholderTextColor="#9a9a9a"
          onChangeText={text => setUser(text)}
        />
        <TextInput
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#9a9a9a"
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login();
          }}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>
        <View style={[styles.LoginIconView, styles.alignIconView]}>
          <View
            onTouchStart={() => {
              setChecked(!checked);
            }}
            style={styles.LoginIconView}>
            {checked ? (
              <Icon name="check-square" size={20} color="#fff" />
            ) : (
              <Icon name="square" size={20} color="#fff" />
            )}
            <Text style={styles.LoginIconText}>Lembre-se de mim</Text>
          </View>
          <Text
            style={styles.loginUrl}
            onPress={() => Linking.openURL('http://google.com')}>
            Precisa de ajuda ?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 25,
  },
  form: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#353839',
    marginVertical: 10,
    height: 65,
    paddingLeft: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: 'red',
    marginVertical: 10,
    height: 65,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  LoginIconView: {
    flexDirection: 'row',
  },
  alignIconView: {
    justifyContent: 'space-between',
  },
  LoginIconText: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
  loginUrl: {
    fontSize: 16,
    color: 'gray',
  },
  Errortext: {
    color: '#f60',
  },
});
