import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  AsyncStorage,
} from 'react-native';
import * as screenNames from '../navigation/screenNames';
import {data, product} from '../data';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Home = (props) => {
  const {navigation} = props;

  const renderItem = (item) => (
    <View key={item.id.toString()}>
      <View style={styles.borderStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(screenNames.PACKAGE_SCREEN, {
              item,
            });
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            <Image source={{uri: item.url}} style={styles.ImageClass} />
            <View
              style={{
                marginHorizontal: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 15,
                  marginTop: 3,
                  marginEnd: 8,
                }}>
                {item.packageTitle}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.containerStyle}>
          <Image
            style={styles.upperImageStyle}
            source={{uri: 'https://i.ibb.co/9TqB2Nk/top.jpg'}}
          />
          <View
            style={{
              alignSelf: 'center',
              paddingTop: 2,
              paddingBottom: 2,
              paddingHorizontal: 8,
              borderRadius: 16,
              backgroundColor: 'green',
              marginBottom: 10,
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{marginTop: 4, fontSize: 15, color: 'white', padding: 8}}>
              Let's discover our Destination
            </Text>
          </View>

          <FlatList data={product} renderItem={({item}) => renderItem(item)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
  },
  bgImageStyle: {
    flex: 1,
  },
  upperImageStyle: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: responsiveWidth(100),
    height: responsiveScreenHeight(30),
  },
  ImageClass: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    paddingTop: 0,
    paddingLeft: 3,
  },
  borderStyle: {
    flex: 1,
    borderColor: '#7CC434',
    backgroundColor: '#E6FFCD',
    borderWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
    borderRadius: 16,
    marginHorizontal: 16,
  },
});
export default Home;
