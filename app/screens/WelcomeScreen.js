import React, {Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

class WelcomeScreen extends Component{
	
	static navigationOptions = { 
	header:null
	}
	
render(){
	return (
	<View style={styles.container}>
			<Text style={styles.color1}>welcome to KasiHub...</Text> 
			<Text style={styles.color1}>this is the place where you will see all your nearby spaza shops and more</Text>
			<Text style={styles.color1}>This gives you the chance to buy and all the small items at your convience</Text>
			
		
		<Button title='LogIn' onPress={()=> this.props.navigation.navigate('Login')}/>
		
		<Button title='SignUp' onPress={()=> this.props.navigation.navigate('SignUp')}/>
		
		<Button title='Continue without loggin' onPress={()=> this.props.navigation.navigate('App')}/>
		</View>
		);
	}

}

export default WelcomeScreen;

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
}
	});