import React, {Component} from 'react';
import {Image, View,Text,StyleSheet} from 'react-native';
import {DrawerItems createDrawerNavigator, createStackNavigator} from 'react-navigation';
import { Header, Container, Content, Body, Icon} from 'native-base';

import appTabNavigator from './appTabNavigatorv';
import myProfile from './myProfile';
import StoreUpload from './StoreUpload';
import Homescreen from './Homescreen';
//const InnerStackNavigator = createStackNavigator({
	//TabNavigator:{
		//screen:appTabNavigator 
	//}
//})
const CustomDrawerContentComponent = (props)=> (
	<Container>
		<Header style={{height:200}}>
			<Body>
				<Image 
				source={require('../assets/Nicholas.jpg')}/>
			</Body>
		</Header>
		<Content>
			<DrawerItems {...props}/>
		<Content>
	</Container>
)
const  AppDrawerNavigator = new createDrawerNavigator({
//	appTabNavigator:{
//		screen: InnerStackNavigator},
	MyProfile:{
		screen: myProfile},
	Home:{
		screen: Homescreen	},
	Create a Store:{
		screen: StoreUpload}, 
}, {
	initialRouteName: 'Home',
	contentComponent: CustomDrawerContentComponent,
	drawerOpenRoute: 'DrawerOpen';,
	drawerCloseRoute:'DrawerClose',
	drawerToggleRoute:'Drawertoggle' 
})

export default AppDrawerNavigator;

const styles = StyleSheet.create({
container:{
flex:1,
alignItems: 'center',
justifyContent: 'center'
},
drawerImage:{
	height:150,
	width:150,
	borderRadius:75
}
	});