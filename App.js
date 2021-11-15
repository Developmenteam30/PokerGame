import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import MainStack from './src/navigations/MainStack';
import styles from './src/styles/AppStyle';
import {store} from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack/>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};
export default App;
