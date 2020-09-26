import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps/index';
import DatePicker from 'react-native-datepicker';
import * as screenName from '../navigation/screenNames';
import SessionManager from '../data/SessionManager';

class PackageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().slice(0, 10),
      isButtonLogin: true,
    };
  }

  componentDidMount() {
    this.verificationLogin();
  }

  verificationLogin = async () => {
    let status = await SessionManager.getStatusLogin();
    if (status === '1') {
      this.setState({isButtonLogin: false});
    } else {
      this.setState({isButtonLogin: true});
    }
  };

  render() {
    const {date, isButtonLogin} = this.state;
    const {navigation, route} = this.props;
    const item = route.params.item;
    return (
      <ScrollView style={styles.containerStyle}>
        <View style={styles.header}>
          <View style={{width: 400, height: 50}}>
            <Text style={styles.headerText}>{item.headerTitle}</Text>
          </View>
        </View>
        <View>
          <View style={{width: 410, height: 190}}>
            <ScrollView pagingEnabled horizontal>
              {item.images.map((image, index) => (
                <View key={String(index)} style={{position: 'relative'}}>
                  <Image
                    source={{uri: image}}
                    style={{
                      width: 400,
                      height: 200,
                      margin: 2,
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      position: 'absolute',
                      bottom: 10,
                      left: 160,
                    }}>
                    {item.images.map((data, i) => (
                      <Text
                        style={{
                          fontSize: 40,
                          color: index === i ? 'white' : 'gray',
                        }}>
                        •
                      </Text>
                    ))}
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.border}>
            <Text style={styles.pointing}>{item.title}</Text>
            <Text style={{letterSpacing: 1}}>
              Free cancelation before 24 Hours{'\n'}
              Duration 9 Hours{'\n'}
              Bahasa / English
            </Text>
            <Text style={styles.poin}>Include:</Text>
            {item.include.map((data, index) => (
              <Text>• {data}</Text>
            ))}

            <Text style={styles.poin}>Exclude:</Text>
            {item.exclude.map((data, index) => (
              <Text>• {data}</Text>
            ))}
          </View>
          <View style={{marginTop: 20}} />
          <View style={styles.border}>
            <Text style={styles.poin}>Itinerary</Text>
            {item.Itinerary.map((data, index) => (
              <Text>• {data}</Text>
            ))}

            <View>
              <Text style={styles.poin}>Meeting Poin</Text>
              <View style={{justifyContent: 'center'}}>
                <Text style={{wordSpacing: 5}}>{item.about}</Text>
              </View>

              <View>
                <MapView
                  style={{width: '100%', height: 200, marginTop: 9}}
                  initialRegion={item.initialRegion}
                />
                <Text style={{fontSize: 20}}>{item.meetingpoint}</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', margin: 8}}>
              {/* <TouchableOpacity
               style={{
                borderRadius: 3,
                elevation: 2,
                backgroundColor: 'yellow',
                width: 150,
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                borderWidth: 0.5,
                marginRight: 10,
                    }}
              onPress={() => navigation.navigate(screenName.CALENDAR_SCREEN)}>
              <Text style={{fontSize: 18}}>Choose Date</Text>
            </TouchableOpacity> */}

              <DatePicker
                style={{width: 150}}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2020-05-01"
                maxDate="2023-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 10,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    width: 10,
                    marginLeft: 5,
                    padding: 0,
                  },
                }}
                onDateChange={(date) => {
                  this.setState({date: date});
                }}
              />

              <TouchableOpacity
                disabled={isButtonLogin}
                style={{
                  elevation: 2,
                  borderRadius: 3,
                  backgroundColor: 'yellow',
                  width: 150,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 20,
                }}
                onPress={() =>
                  navigation.navigate(screenName.BOOKING_SCREEN, {
                    date: date,
                    item: item,
                  })
                }>
                <Text style={{fontSize: 18}}>Book</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginBottom: 32}} />
        </View>
      </ScrollView>
    );
  }
}
export default PackageScreen;
const styles = StyleSheet.create({
  header: {
    height: 40,
    marginLeft: -20,
    paddingTop: 4,
    backgroundColor: '#FFCA28',
    marginVertical: 8,
  },
  headerText: {
    fontSize: 25,

    alignSelf: 'center',
    color: '#E65100',
    fontWeight: 'bold',
  },
  pointing: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  poin: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  border: {
    marginTop: 10,
    padding: 5,
    borderColor: '#7CC434',
    backgroundColor: '#E6FFCD',
    paddingLeft: 10,
    borderRadius: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  borderTop: {
    borderColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'orange',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
