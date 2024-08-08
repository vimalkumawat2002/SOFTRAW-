import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Logout = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logout}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>
          {' '}
          ARE YU SURE YU WANT TO LOGOUT ?
        </Text>
      </View>
      <View style={styles.main}>
        <Text
          style={{
            backgroundColor: 'red',
            width: 60,
            height: 40,
            padding: 10,
            borderRadius: 15,
            color: 'white',
          }}
          onPress={() => navigation.navigate('Login')}>
          {' '}
          YES{' '}
        </Text>
        <Text
          style={{
            backgroundColor: 'green',
            width: 60,
            height: 40,
            padding: 10,
            borderRadius: 15,
            color: 'white',
          }}
          onPress={() => navigation.navigate('HomeScreen')}>
          {' '}
          NO{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  logout: {
    marginHorizontal: 60,
    marginVertical: 300,
  },
  main: {
    flexDirection: 'row',
    gap: 50,
    marginHorizontal: 115,
    marginVertical: -250,
  },
});
export default Logout;
