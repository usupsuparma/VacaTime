import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import {Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';
import * as screenNames from '../navigation/screenNames';
import {log} from 'react-native-reanimated';
import SessionManager from '../data/SessionManager';

const Login = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const _Login = async (navigation) => {
    /**
     * ini hanya data dumie saja karena tidak bisa login ke backend
     */
    let session = {
      username: username,
      email: 'test@mail.com',
    };
    await SessionManager.storeSession(session);
    await SessionManager.setStatusLogin('1');
    navigation.navigate(screenNames.HOME_SCREEN);

    /**
     * ini bisa digunakan kalau server sudah bisa tinggal disesuikan aja
     */
    // setLoading(true);
    // let headers = {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // };
    // useEffect(() => {
    //   fetch('127.0.0.1:8080/login', headers)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       if (result.status === true) {
    //         let session = {
    //           username: result.data.userName,
    //           email: result.data.email,
    //         };
    //         this.storeSession(session);
    //         setLoading(false);
    //         this.props.navigation.navigate(screenNames.HOME_SCREEN);
    //       } else {
    //         setLoading(false);
    //         alert('login gagal');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       setLoading(false);
    //     })
    //     .finally(() => {
    //       this.setState({isLoading: false});
    //     });
    // });
  };

  if (isLoading === true) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
        <Text style={styles.textLogoStyle}>VacaTime</Text>
      </View>
      <Form style={styles.formLoginStyle}>
        <Item floatingLabel>
          <Label>
            <Text style={styles.inputStyle}>Username</Text>
          </Label>
          <Input
            style={styles.inputStyle}
            onChangeText={(value) => setUserName(value)}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={styles.inputStyle}>Passowrd</Text>
          </Label>
          <Input
            style={styles.inputStyle}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </Item>
      </Form>
      <Button
        onPress={() => _Login(navigation)}
        block
        info
        style={styles.footerBottomStyle}>
        <Text>Sign In</Text>
      </Button>
      <View style={styles.footerSignUpStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate(screenNames.REGISTRATION_SCREEN)}>
          <Text style={styles.signUpStyle}>
            Don't have an account? Register Here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  formLoginStyle: {
    marginTop: -30,
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
  footerSignUpStyle: {
    marginTop: 25,
    alignItems: 'center',
  },
  signUpStyle: {
    color: 'white',
    fontSize: 15,
  },
});

export default Login;
