import React from 'react';
import { StyleSheet, Image, Button, Text, View, Alert} from 'react-native';
import { ImagePicker } from 'expo';
// import * as firebase from 'firebase';
 
 
 
 export default class StoreUpload extends React.Component {
 //  static navigationOptions = {
//	   header: null,
 // }
   onChooseImagePress = async ()=> {
//need an if statement to determine whether the user wants to upload using gallery picture or cam	  
	  let results = await ImagePicker.launchCameraAsync();
	//let results = await ImagePicker.launchImageLibraryAsync();
	
	if(!results.cancelled){
		this.uploadImage(results.uri, 'image name')
		.then() =>{
			 Alert.alert("success");}
		.catch((error)=> {
			Alert.alert(error);});
	}
	
   }
   
   
   uploadImage = Async (uri)=> {
	   const response = await fetch(uri);
	   const blob = await response.blob();
	   
	   var ref = firebase.storage().ref().child("storeImages", imageName);
	   return ref.put(blob);
   }
   
  render() {
    return (
      <View style={styles.header}>
		<Text style={styles.info_text}>in order your store to be listed you need to upload an Avatar for it below</Text>
		<Button title= 'Store image' onPress={this.onChooseImagePress}
	   
      </View>
    );
  }
 
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: '#cc00cc'
  },
  info_text: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'right',
	color: 'green',
	
  }
});