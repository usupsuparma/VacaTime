import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Item, Input, Form, Button, Thumbnail, Text, Label} from 'native-base';
import * as screenNames from '../navigation/screenNames';
import SessionManager from '../data/SessionManager';
const axios = require('axios').default;

interface Prop {}
interface State {
  username: string;
  email: string;
  password: string;
  isLoading: boolean;
}

class RegistrationForm extends React.Component<Prop, State> {
  constructor() {
    super();
    this.state = {
      username: null,
      email: null,
      password: null,
      isLoading: false,
    };
  }

  handleChange = (value) => {
    console.log('value');
  };

  handleSubmit = async () => {
    const {username, email, password} = this.state;
    if (username === null) {
      alert('username harus di isi');
      return;
    }
    if (email === null) {
      alert('email harus di isi');
      return;
    }
    if (password === null) {
      alert('password harus di isi');
      return;
    }
    try {
      const session = {
        username: username,
        email: email,
        password: password,
      };
      await SessionManager.storeSession(session);
      this.props.navigation.navigate(screenNames.HOME_SCREEN);
    } catch (e) {
      console.log(e);
    }
    // const request_Headers = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Cache-Control': 'no-cache, no-store, must-revalidate',
    //     Pragma: 'no-cache',
    //     Expires: 0,
    //   },
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     email: this.state.email,
    //     password: this.state.password,
    //   }),
    // };
    // const request_UserURL = 'http://127.0.0.1:8080/customers';
    // const response = await fetch(request_UserURL, request_Headers)
    //   .then((res) => res.json())
    //   .then((res) => console.log('beres', res))
    //   .catch((error) => console.log(error));
    // console.log(response);
  };

  render() {
    const {navigation} = this.props;
    const {isLoading} = this.state;

    if (isLoading === true) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={'#FF9800'} />
        </View>
      );
    }
    return (
      <View style={styles.containerStyle}>
        <Image
          style={styles.bgImageStyle}
          source={{uri: 'https://i.ibb.co/7k5Nd0H/loadb.jpg'}}
        />
        <View style={styles.logoStyle}>
          <Thumbnail
            square
            large
            source={{uri: 'https://i.ibb.co/Q6TGfwB/Vacatime1.png'}}
          />
          <Text style={styles.textLogoStyle}>Your Travel Buddy!</Text>
        </View>
        <Form style={styles.formRegisterStyle} method="post">
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Username</Text>
            </Label>
            <Input
              textContentType="username"
              placeholder="username"
              onChangeText={(val) => this.setState({username: val})}
              style={styles.inputStyle}
            />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>E-Mail</Text>
            </Label>
            <Input
              textContentType="emailAddress"
              placeholder="email"
              onChangeText={(val) => this.setState({email: val})}
              style={styles.inputStyle}
            />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Password</Text>
            </Label>
            <Input
              textContentType="password"
              placeholder="password"
              onChangeText={(val) => this.setState({password: val})}
              style={styles.inputStyle}
              secureTextEntry={true}
            />
          </Item>
        </Form>
        <Button
          onPress={() => this.handleSubmit()}
          block
          info
          style={styles.footerBottomStyle}>
          <Text>Register</Text>
        </Button>
        <View style={styles.footerSignInStyle}>
          <TouchableOpacity
            onPress={() => navigation.navigate(screenNames.LOGIN_SCREEN)}>
            <Text style={styles.SignInStyle}>
              Already have an account? Sign In here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  bgImageStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogoStyle: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  formRegisterStyle: {
    marginTop: -70,
    paddingLeft: 10,
    paddingRight: 30,
  },
  inputStyle: {
    color: 'white',
    marginBottom: 6,
    fontSize: 14,
  },
  footerBottomStyle: {
    marginTop: 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#FF9800',
  },
  footerSignInStyle: {
    marginTop: 25,
    alignItems: 'center',
  },
  SignInStyle: {
    color: 'white',
    fontSize: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationForm;
