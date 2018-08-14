import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Icon, Button, Container, Header, Content,Left } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Homescreen extends Component{
render(){
	return (
	<Container>
	<Header>
		<Left>
			<ionicons name='md-menu' size={25}/>
		</Left>
	</Header>
		<Content contentContainerStyle= {styles.container} >
			<Text style= {styles.color1}>Shop 1 </Text>
			<Text style= {styles.color2}>Shop 2 </Text>
			<Text style= {styles.color3}>Shop 3 </Text>
			<Text style= {styles.color4}>Shop 4 </Text>
			<Text style= {styles.color1}>Spaza 5 </Text>
			<Text style= {styles.color2}>Spaza 6 </Text>
			<Text style= {styles.color3}>Spaza 7 </Text>
			<Text style= {styles.color4}>Spaza 8 </Text>
		</Content>
	</Container>
	
 
		);
	}

}

export default Homescreen;

const styles = StyleSheet.create({
container:{
flex:1,
alignItems: 'center',
justifyContent: 'center'
},
color1:{
	fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'left',
	color: '#7d4b12'
},
color2:{
	fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'right',
	color: '#f7911f'
},
color3:{
	fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'left',
	color: '#37b24d'
},
color4:{
	fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'right',
	color: '#ffd43b'
},

	});