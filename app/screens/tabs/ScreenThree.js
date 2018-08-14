import React, {Component} from 'react';
import {
View,
Text,
StyleSheet,
Button
} from 'react-native';

class ScreenThree extends Component{
render(){
	return (
	<View style={styles.container}>
		<Text>Tab view 3 </Text>
	</View>
		);
	}

}

export default ScreenThree;

const styles = StyleSheet.create({
container:{
flex:1,
alignItems: 'center',
justifyContent: 'center'
}
	});