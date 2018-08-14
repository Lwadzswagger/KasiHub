import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import WelcomeScreen  from '../screens/WelcomeScreen';
import SignUpscreen from '../screens/SignUpscreen';
import LogInScreen from '../screens/LogInScreen';
import AppStack from './AppDrawerNavigator';
import AuthLoadingScreen from './AuthLoadingScreen';
 
 
 //const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({
	Welcome:{ 
		screen: WelcomeScreen},	
	SignUp:{ 	
		screen: SignUpscreen},
	Login:{ 		
		screen: LogInScreen},});

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);