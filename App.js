
// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import SettingsScreen from './SettingsScreen'
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: ""
};

firebase.initializeApp(firebaseConfig);

const AppStack = createBottomTabNavigator({ Home: Main, Settings: SettingsScreen });
const AuthStack = createStackNavigator({ LogIn: Login, Load: Loading, SignUp: SignUp });

// create our app's navigation stack
const App = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
)


export default App

