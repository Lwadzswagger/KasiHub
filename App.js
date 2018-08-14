import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import AppDrawerNavigator './app/screens/AppDrawerNavigator';
//import appTabNavigator from './app/screens/appTabNavigator';
//import AppStackNavigator from './app/routes/AppStackNavigator';
import initialStack from './app/routes/initialStack';


import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBoY3XbwGX3zJRb04ZlCt1NfdZ6UZ5SK7w",
    authDomain: "kasihub-27.firebaseapp.com",
    databaseURL: "https://kasihub-27.firebaseio.com",
    projectId: "kasihub-27",
    storageBucket: "kasihub-27.appspot.com",
    messagingSenderId: "600175008781"

};
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
		<initialStack/>
	);
	
  }
  
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  }
   
});
