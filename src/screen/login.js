import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import {user} from '../../data';

const login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    let loginuser = user.filter(
      element => element.email === email && element.password === password,
    );
    if (loginuser && loginuser.length > 0) {
      navigation.navigate('Home');
    } else {
      alert('user not found');
    }
  };

  return (
    <>
      <View style={styles.Image}>
        <Image
          source={require('../../image/img3.jpeg')}
          style={{width: '98%', height: 370}}
        />
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontFamily: 'Cochin',
            color: 'black',
            backgroundColor: 'pink',
          }}>
          {' '}
          LOGIN
        </Text>
      </View>

      <View style={styles.container}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginHorizontal: 13,
              marginVertical: 10,
            }}>
            <View style={{marginVertical: 10}}>
              <Icon name="email" size={23} />
            </View>
            EMAIL
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="ENTER YOUR EMAIL"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text
          style={{
            fontWeight: 'bold',
            marginHorizontal: 14,
            marginVertical: 12,
          }}>
          <Icon name="lock" size={22} />
          PASSWORD
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input1}
          placeholder="ENTER YOUR PASSWORD"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Text style={{marginHorizontal: 5, color: 'red'}}>
          {' '}
          Forget Password ?
        </Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={{fontSize: 20}}> LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', left: 85}}>
          <Text style={styles.linkText}> Please register first </Text>
          <>{''}</>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Register')}>
            {' '}
            Register{' '}
          </Text>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 15,
    borderRadius: 20,
    marginVertical: -5,
  },
  Image: {
    resizeMode: 'stretch',
  },
  input1: {
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 15,
    borderRadius: 20,
    marginVertical: 2,
  },
  button: {
    marginHorizontal: 120,
    marginVertical: 30,
    backgroundColor: 'orange',
    height: 40,
    width: 180,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  linkText: {
    textAlign: 'center',
    color: '#fff',
  },
  link: {
    color: '#0E33F3',
    textAlign: 'center',
  },
});

export default login;
