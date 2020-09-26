import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import * as screenNames from './screenNames';
import Home from '../screens/Home';
import Bandung from '../screens/BandungPackage';
import Login from '../screens/LoginForm';
import Registration from '../screens/RegistrationForm';
import Calendar from '../screens/Calendar';
import About from '../screens/About';
import Details from '../screens/Details';
import Booking from '../screens/Booking';
import SplashScreen from '../screens/Splash';
import Payment from '../screens/Payment';
import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
  Feather,
} from '../assets/icons/Icons';
import {Header} from 'react-native-elements';
import {YOGYAKARTA_SCREEN} from './screenNames';
import PackageScreen from '../screens/PackageScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

console.disableYellowBox = true;

const TabBottom = () => {
  return (
    <Tab.Navigator
      activeColor="green"
      inactiveColor="black"
      barStyle={{backgroundColor: '#ffff'}}>
      <Tab.Screen
        name="Home"
        component={AppStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <AntDesign name="infocirlceo" color={'black'} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={AuthStack}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({color}) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.LOGIN_SCREEN} component={Login} />
      <Stack.Screen
        name={screenNames.REGISTRATION_SCREEN}
        component={Registration}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME_SCREEN} component={Home} />
      <Stack.Screen name={screenNames.BANDUNG_SCREEN} component={Bandung} />
      <Stack.Screen name={screenNames.BOOKING_SCREEN} component={Booking} />
      <Stack.Screen name={screenNames.PAYMENT_SCREEN} component={Payment} />
      <Stack.Screen name={screenNames.CALENDAR_SCREEN} component={Calendar} />
      <Stack.Screen name={screenNames.LOGIN_SCREEN} component={Login} />
      <Stack.Screen
        name={screenNames.REGISTRATION_SCREEN}
        component={Registration}
      />
      <Stack.Screen name={screenNames.ABOUT_SCREEN} component={About} />
      <Stack.Screen
        name={screenNames.PACKAGE_SCREEN}
        component={PackageScreen}
      />
    </Stack.Navigator>
  );
};

export default function (props) {
  const [isAppVisble, setisAppVisble] = React.useState(true);
  setTimeout(() => {
    setisAppVisble(false);
  }, 3000);
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      {isAppVisble && <SplashScreen />}
      {!isAppVisble && <TabBottom />}
      {/*  */}
    </NavigationContainer>
  );
}
