import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { AppRegistry } from 'react-native';
import App from './App';

// const store = configureStore();

// const RNRedux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

AppRegistry.registerComponent('myrealproject', () => App);