import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import img1 from '../../image/img20.png';

const HomeScreen = () => {
  return (
    <>
     
        <View style={Styles.container}>
          <Image
            source={img1}
            style={{width: '100%', height: 200, marginVertical: 5}}
          />
          <View>
            <Text
              style={{
                fontSize: 22,
                width: 440,
                height: 60,
                textDecorationLine: 'underline',
                color: 'red',
              }}>
              {' '}
              SOFTRAW IT SOLUTIONS PVT LTD{' '}
            </Text>
            <Text
              style={{
                marginHorizontal: 15,
                fontSize: 15,
                fontWeight: 'bold',
                marginVertical: -20,
              }}>
              {' '}
              Software company in Jaipur, Rajasthan
            </Text>
          </View>
          <View style={Styles.main}>
            <Text
              style={{
                borderColor: 'black',
                borderWidth: 2,
                width: 70,
                marginLeft: 10,
                height: 30,
                borderRadius: 10,
                padding: 4,
              }}>
              {' '}
              website
            </Text>
            <Text
              style={{
                borderColor: 'black',
                borderWidth: 2,
                width: 70,
                height: 30,
                borderRadius: 10,
                padding: 2,
              }}>
              {' '}
              Direction
            </Text>
            <Text
              style={{
                borderColor: 'black',
                borderWidth: 2,
                width: 70,
                height: 30,
                borderRadius: 10,
                padding: 2,
                marginLeft: 5,
              }}>
              {' '}
              Save
            </Text>
            <Text
              style={{
                borderColor: 'black',
                borderWidth: 2,
                width: 70,
                height: 30,
                borderRadius: 10,
                padding: 2,
              }}>
              {' '}
              Share
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={{marginLeft: 10}}>YU VISIT ON MONDAY</Text>
          <Text style={{fontSize: 20}}> Address:</Text>
          <Text>
            {' '}
            724-725 7th Floor Mall Of Jaipur,Gandhi Path W ,B Block Vaishali
            Nagar Jaipur,Rajasthan ..302021
          </Text>

          <Text>Hours Open. closes 8.30 pm </Text>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            {' '}
            PHONE:
          </Text>
          <Text> ..079763 36261</Text>
          
        </View>
    
    </>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  main: {
    flexDirection: 'row',
    marginVertical: 30,
    fontSize: 30,
    fontWeight: 'bold',
    gap: 30,
  },
});

export default HomeScreen;
