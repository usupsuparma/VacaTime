import React from 'react'
import {View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native'

const {width} = Dimensions.get("screen");
const height = width * 0.5; 

const images = [
    'https://i.ibb.co/hdwsC4t/bandung0.jpg',
    'https://i.ibb.co/Gt5gzzR/bandung.jpg',
    'https://i.ibb.co/61qmHv6/bandung3.jpg'
]
export default class Slider extends React.Component {
    render(){
        return(
            <View style={{marginTop:10, width, height}}>
                <View>
                <ScrollView pagingEnabled horizontal style={{width, height}}>
                {
                    images.map((image, index) => (
                
                <Image 
                key={index}
                source={{uri: image}}
                style={{width, height, resizeMode:'cover'}}/>
                    ))
                }
                </ScrollView>
                </View>
                <View style={styles.border}>
        <Text style={styles.pointing}>
          Details 
        </Text>
        <Text style={styles.poin}>
        Include:
        </Text>
        <Text>
        • Tourguide {"\n"}
        • Transportation {"\n"}
        • The attraction tikets {"\n"}
        • Free docummentation {"\n"}
        • Gasoline
        </Text>
        <Text style={styles.poin}>
          Exclude:
        </Text>
        <Text>
        • Meals {"\n"}
        • Personal purchase {"\n"}
        • Transportation {"\n"}
        • Extra time
        </Text>
      </View>
      <View style={styles.border}>
        <Text style={styles.pointing}>
          Itinerary
        </Text>
        <Text>
        • White Crater {"\n"}
        • Tea Plantage {"\n"}
        • Hot Spring {"\n"}
        • Strawberry farm
        </Text>
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  containerStyle:{ 
  flex:1
  },
  pointing:{
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10
  },
  poin:{
      fontSize: 10
  },
  border:{
    borderColor:'black',
    borderBottomColor: 'black',
    borderWidth: 2,
    padding: 5
    
    
  }
})