import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Button, Form, Input, Item, Label, Thumbnail} from 'native-base';
import * as screenNames from '../navigation/screenNames';
import SessionManager from '../data/SessionManager';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      isLoading: false,
    };
  }

  componentDidMount() {}

  _login = async () => {
    const {userName, password} = this.state;
    this.setState({isLoading: true});
    let headers = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    };

    /**
     *  output format response
     *  {status: true, message: 'success login', data: {username: 'test', email: 'test@mail'}}
     */
    fetch('127.0.0.1:8080/login', headers)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === true) {
          let session = {
            username: result.data.userName,
            email: result.data.email,
          };
          this.storeSession(session);
          this.props.navigation.navigate(screenNames.HOME_SCREEN);
        } else {
          this.setState({isLoading: false});
          alert('login gagal');
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.setState({isLoading: false});
      });
  };

  storeSession = async (session) => {
    await SessionManager.storeSession(session);
    /**
     * status login bisa di ganti dengan token yang di dapat dari server token bearir
     */
    await SessionManager.setStatusLogin('1');
  };

  render() {
    const {navigation} = this.props;
    const {isLoading} = this.state;

    if (isLoading === true) {
      return (
        <View>
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
              onChangeText={(value) => this.setState({userName: value})}
            />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Passowrd</Text>
            </Label>
            <Input
              style={styles.inputStyle}
              secureTextEntry={true}
              onChangeText={(value) => this.setState({password: value})}
            />
          </Item>
        </Form>
        <Button
          onPress={() => this._login()}
          block
          info
          style={styles.footerBottomStyle}>
          <Text>Sign In</Text>
        </Button>
        <View style={styles.footerSignUpStyle}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(screenNames.REGISTRATION_SCREEN)
            }>
            <Text style={styles.signUpStyle}>
              Don't have an account? Register Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

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
