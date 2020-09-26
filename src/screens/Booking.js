import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {PAYMENT_SCREEN} from '../navigation/screenNames';
import SessionManager from '../data/SessionManager';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    try {
      this.setState({isLoading: true});
      let user = await SessionManager.getSession();
      this.setState({isLoading: false, user: user});
    } catch (e) {
      console.log(e);
      this.setState({isLoading: false});
    }
  };

  render() {
    const {navigation} = this.props;
    const {date, item} = this.props.route.params;
    const {isLoading, user} = this.state;
    if (isLoading === true) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <Text style={{margin: 10, fontSize: 30}}>Bookings</Text>
        <View
          style={{
            marginHorizontal: 16,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: 'gray',
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
            <Text style={{marginTop: 10, marginBottom: 10}}>
              Detail Booking:
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>Booking code:</Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>
              Destination: {item.packageTitle}
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>
              Description: {item.des}
            </Text>

            <Text style={{marginTop: 10, marginBottom: 10}}>
              Customer Data:
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>Date: {date}</Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>
              Name: {user.username}
            </Text>
            <Text style={{marginTop: 10, marginBottom: 10}}>
              Email: {user.email}
            </Text>
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
  }
}

export default Booking;
