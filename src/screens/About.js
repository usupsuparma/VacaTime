import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Thumbnail} from 'native-base';
import Details from './Details';

import * as screenNames from '../navigation/screenNames';

import FB from '../assets/icons/logoFB.png';
import IG from '../assets/icons/logoIG.png';
import WA from '../assets/icons/logoWA.png';
import GM from '../assets/icons/logoLoc.png';
import {Button} from 'react-native-paper';

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoStyle}>
          <Thumbnail
            square
            large
            source={{uri: 'https://i.ibb.co/Q6TGfwB/Vacatime1.png'}}
          />
          <Text>Your Travel Buddy!</Text>
        </View>
        <View>
          <Text style={styles.infoText}>
            VacaTime is a boutique tour agency specialising in giving visitor's
            to Indonesia a unique personalised experience of this incredible
            country!
          </Text>
        </View>
        <View style={{marginHorizontal: 16, marginTop: 16}}>
          <Text>More Further Info Contact US:</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.iconPosition}>
              <Image style={styles.iconStyle} source={FB} />
              <Text>Vacatimeid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.iconPosition}>
              <Image style={styles.iconStyle} source={IG} />
              <Text>Vacatime.id</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.iconPosition}>
              <Image style={styles.iconStyle} source={WA} />
              <Text>+62813 8686 4464</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.iconPosition}>
            <Image style={styles.iconStyle} source={GM} />
            <Text>Jl. Cangkuang II no. 6A, Cimahi Selatan, Cimahi</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCEDC8',
  },
  logoStyle: {
    marginTop: 70,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconPosition: {
    flexDirection: 'row',
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginEnd: 8,
  },
  buttonContainer: {
    marginVertical: 8,
  },
});
