import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.Image}>
        <Image
          source={require('../../image/img18.png')}
          style={{height: 300, width: 300, borderRadius: 150}}
        />
      </View>

      <Text
        style={{
          marginHorizontal: 100,
          fontFamily: 'verdana',
          fontWeight: 'bold',
          fontSize: 20,
          textDecorationLine: 'underline',
          textShadowColor: 'red',
        }}>
        VIMAL KUMAWAT
      </Text>
      <Text style={{marginHorizontal: 100, fontSize: 20}}>
        {' '}
        mob..9784999703
      </Text>
      <View style={Styles.Profile}>
        <Text
          style={{fontSize: 21, padding: 1, marginTop: 4}}
          onPress={() => navigation.navigate('HomeScreen')}>
          {' '}
          Update Profile
        </Text>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
  },
  Image: {
    marginHorizontal: 40,
    marginVertical: 30,
  },
  Profile: {
    marginHorizontal: 110,
    marginVertical: 30,
    borderColor: 'black',
    borderWidth: 3,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'orange',
  },
});
export default Profile;
