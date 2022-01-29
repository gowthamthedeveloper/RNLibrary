/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/libraryApp/App'; //LibraryApp
// import App from './src/todoapp/AppTodo'; //ToDoApp
import App from './src/reviewApp/AppReview'; //ReviewApp

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
