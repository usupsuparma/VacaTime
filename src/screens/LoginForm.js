import React, {Component} from 'react';
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

const Login = ({navigation}) => {
  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const _Login = async ({navigation}) => {
    setLoading(true);
    alert(username, password);
    setLoading(false);
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
            onChangeText={(value) => setusername(value)}
          />
        </Item>
        <Item floatingLabel>
          <Label>
            <Text style={styles.inputStyle}>Passowrd</Text>
          </Label>
          <Input
            style={styles.inputStyle}
            secureTextEntry={true}
            onChangeText={(value) => setpassword(value)}
          />
        </Item>
      </Form>
      <Button onPress={() => _Login} block info style={styles.footerBottomStyle}>
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
