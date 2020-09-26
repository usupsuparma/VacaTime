import React,{useEffect} from 'react';
import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Splash=()=>{

    
        return(
            <ImageBackground
                source={{uri:'https://i.ibb.co/wNVwD7R/bgyellow.jpg'}}
                style={styles.imageStyle}>
                    <View style={styles.bgImage}>
                        <Image source={{uri:'https://i.ibb.co/Q6TGfwB/Vacatime1.png'}}
                        style={styles.logo}>

                        </Image>
                        <Text style={styles.textStyle}>
                            Your Travel Buddy!
                            </Text>
                        
                    </View>

            </ImageBackground>
            
        )
}

const styles = StyleSheet.create({
    imageStyle:{
        height: '100%',
        width: '100%'
    },
    bgImage: {
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
    },
    logo: {
        height:100, 
        width:100
    },
    textStyle: {
        fontSize:30, 
        color:'white', 
        fontWeight: 'bold'
    }
});

export default Splash;
