/**
 * @format
 */

import 'react-native-vector-icons/FontAwesome';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from './src/localization/index';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

AppRegistry.registerComponent(appName, () => App);
