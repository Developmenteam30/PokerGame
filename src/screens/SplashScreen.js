import React, {useEffect} from 'react';
import {Image, SafeAreaView} from 'react-native';
import styles from '../styles/SplashScreenStyle';
import {Images} from '../utils/Images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.pockerLogo} style={styles.logoStyle} />
    </SafeAreaView>
  );
};
export default SplashScreen;
