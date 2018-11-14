/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
export {Home} from './home';
export {About} from './about';

AppRegistry.registerComponent(appName, () => App);
