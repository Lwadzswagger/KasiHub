import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

class myProfile extends Component{
render(){
	return (
	<Container>
		<Header>
		<Left>
			<ionicons name='md-menu' size={25}/>
		</Left>
	</Header>
	</Container>
	
	<View style={styles.container}>
		<Text>Profile </Text>
		<Text>Update personal details and get started...</Text>
		</View>
		);
	}

}

export default myProfile;

const styles = StyleSheet.create({
container:{
flex:1,
alignItems: 'center',
justifyContent: 'center'
}
	});