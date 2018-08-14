import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import ScreenOne from './tabs/ScreenOne';
import ScreenTwo from './tabs/ScreenTwo';
import ScreenThree from './tabs/ScreenThree';
import Ionicons from 'react-native-vector-icons/Ionicons';

const appTabNavigator = new createBottomTabNavigator({
screenOne:{
	 screen: ScreenOne, 
		navigationOptions:{
		  tabBarLabel:'Feed',
		  tabBaricon: ()=> (
		  <ionicons name='md-compass' size={25}/>
		   ) 	
	    }  
	},
	screenTwo:{
	 screen: ScreenTwo, 
		navigationOptions:{
		  tabBarLabel:'Nearby',
		  tabBaricon: ()=> (
		  <ionicons name='md-compass' size={25}/>
		   ) 	
	    }
	},
	screenThree:{
	 screen: ScreenThree, 
		navigationOptions:{
		  tabBarLabel:'Map',
		  tabBaricon: ()=> (
		  <ionicons name='md-compass' size={25}/>
		   ) 	
	    }
	}
 });
 
const styles = StyleSheet.create({
container:{
	flex:1,
	alignItems: 'center',
	justifyContent: 'center'
} 

	});