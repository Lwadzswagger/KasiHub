import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,
Button
} from 'react-native';

class ScreenOne extends Component{
render(){
	return (
	<View style={styles.container}>
		<Text>Tab view 1 </Text>
	</View>
		);
	}

}

export default ScreenOne;

const styles = StyleSheet.create({
container:{
flex:1,
alignItems: 'center',
justifyContent: 'center'
}
	});