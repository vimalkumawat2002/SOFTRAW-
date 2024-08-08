import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';

const Register = ({navigation}) => {
  return (
    <>
      <View style={styles.Image}>
        <Image
          source={require('../../image/img2.png')}
          style={{width: '98%', height: 300}}
        />
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontFamily: 'Cochin',
            color: 'black',
            backgroundColor: 'green',
          }}>
          {' '}
          REGISTER
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <FIcon name="user" size={20} />
          NAME
        </Text>

        <TextInput style={styles.input} placeholder="ENTER YOUR NAME" />
        <Text
          style={{
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginVertical: 10,
          }}>
          <Icon name="email" size={23} style={{marginVertical: 5}} />
          EMAIL
        </Text>

        <TextInput style={styles.input} placeholder="ENTER YOUR EMAIL" />
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
        />
        <Text style={{marginHorizontal: 5, color: 'red'}}>
          {' '}
          Forget Password ?
        </Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{fontSize: 20}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
flex:2,
backgroundColor:'skyblue'
  },
  Image: {
    resizeMode: 'stretch',
   
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
    width: 150,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  main1: {
    marginHorizontal: 70,
  },
});

export default Register;
