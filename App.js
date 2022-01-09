import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import MainStack from './src/navigations/MainStack';
import styles from './src/styles/AppStyle';
import {store} from './src/redux/store';
import { ThemeProvider } from 'react-native-elements';
import {thememode} from './src/utils/Variables';
const theme = {
  Avatar: {
    rounded: true,
  },
  Badge: {
    textStyle: { fontSize: 30 },
  },
};
const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ThemeProvider useDark={thememode === 'dark'}>
        <Provider store={store}>
          <NavigationContainer>
            <MainStack/>
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
};
export default App;
