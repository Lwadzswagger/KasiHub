 import { createStackNavigator} from 'react-navigation';

import Homescreen from '../screens/Homescreen';
import myProfile from './../screens/myProfile'; 
 

 const AppStackNavigator = new createStackNavigator({
 	Home: {
		screen:Homescreen },
	MyProfile:{
		screen:myProfile}, 
	 
},{navigationOptions: { 
	gesturesEnable:false}
})
