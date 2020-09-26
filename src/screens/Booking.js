import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {PAYMENT_SCREEN} from '../navigation/screenNames';

const Booking = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={{margin: 10, fontSize: 30}}>Bookings</Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'gray',
          height: 300,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 2,
          margin: 5,
          backgroundColor: 'white',
          padding: 10,
        }}>
        <View>
          <Text style={{marginTop: 10, marginBottom: 10}}>Detail Booking:</Text>
          <Text style={{marginTop: 10, marginBottom: 10}}>Booking code:</Text>
          <Text style={{marginTop: 10, marginBottom: 10}}>Destination:</Text>
          <Text style={{marginTop: 10, marginBottom: 10}}>Description:</Text>

          <Text style={{marginTop: 10, marginBottom: 10}}>Customer Data:</Text>
          <Text style={{marginTop: 10, marginBottom: 10}}>
            Date:{route.params.data}
          </Text>
          <Text style={{marginTop: 10, marginBottom: 10}}>Name:</Text>
          <Text style={{marginTop: 10, marginBottom: 10}}>Email:</Text>
        </View>
      </View>

      <View style={{margin: 8, alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            margin: 10,
            borderRadius: 3,
            elevation: 2,
            backgroundColor: 'yellow',
            width: 250,
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            borderWidth: 0.5,
          }}
          onPress={() => navigation.navigate(PAYMENT_SCREEN)}>
          <Text style={{fontSize: 18}}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            elevation: 2,
            borderRadius: 3,
            backgroundColor: 'yellow',
            width: 250,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 18}}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Booking;
