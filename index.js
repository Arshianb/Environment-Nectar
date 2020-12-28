import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
import { createStore } from 'redux';

const store = createStore(reducers);


const AppContainer = () =>   
    <Provider store={store}>
        <App></App>
    </Provider> 



AppRegistry.registerComponent(appName, () => AppContainer);
