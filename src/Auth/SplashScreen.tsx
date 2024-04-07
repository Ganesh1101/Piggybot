
import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Logo from '../components/logo';

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
        navigation.navigate('Login');
      setAnimating(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(splashTimeout); // Clear timeout on component unmount

  }, [navigation]);

  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{height:'100%',width:'100%',opacity:0.7}}>
    <View style={styles.splashContainer}>
     <Logo />
      <ActivityIndicator
        animating={animating}
        size="large"
        style={styles.activityIndicator}
      />
    </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff' // Corrected the color format to '#fff'
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
    color: '#fff', // Corrected the color format to 'pink'
  },
});
