import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AppNavigator from './src/AppNaviagator';
import {Provider} from 'react-redux';
import Main from './src/Main';
import {store} from './src/redux/store/Store';

const App = () => {
  // const openCamera = async () => {
  //   const data = await launchCamera({mediaType: 'image'});
  //   console.log(JSON.stringify(data));
  // };
  // const openGallery = async () => {
  //   const data = await launchImageLibrary({mediaType: 'image'});
  //   console.log(JSON.stringify(data));
  // };
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
