import { AppRegistry } from 'react-native';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const store = configureStore()
// let store = createStore(allReducers);

AppRegistry.registerComponent('awesomeproject', () => <Provider store={store}><App></App></Provider>);
