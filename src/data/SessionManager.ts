import AsyncStorage from '@react-native-community/async-storage';
import Session from './Session';

const KEY_SESS_USER_NAME = 'sess_user_name';
const KEY_SESS_EMAIL = 'sess_email';
const KEY_SESS_PASSWORD = 'sess_password';
const KEY_SESS_IS_LOGIN = 'sess_login';

async function storeSession(session: Session): Promise<void> {
  await AsyncStorage.multiSet([
    [KEY_SESS_USER_NAME, session.username],
    [KEY_SESS_EMAIL, session.email],
    [KEY_SESS_PASSWORD, session.password],
  ]);
  await setStatusLogin('1');
}

async function setStatusLogin(status) {
  await AsyncStorage.setItem(KEY_SESS_IS_LOGIN, status);
}

async function getStatusLogin(): Promise<string> {
  return await AsyncStorage.getItem(KEY_SESS_IS_LOGIN);
}

async function getSession(): Promise<Session> {
  return {
    username: await AsyncStorage.getItem(KEY_SESS_USER_NAME),
    email: await AsyncStorage.getItem(KEY_SESS_EMAIL),
    password: await AsyncStorage.getItem(KEY_SESS_PASSWORD),
  };
}

export default {
  storeSession,
  getSession,
  setStatusLogin,
  getStatusLogin,
};
