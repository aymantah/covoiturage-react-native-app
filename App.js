import React, { useEffect } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabScreen from './screens/BottomTabScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthentificationScreen from './screens/Authentification'
import { AuthContext } from './context';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '@react-native-firebase/app';




import {DrawerParts}  from './screens/DrawerParts';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import FaqScreen from './screens/FaqScreen';


// var firebaseConfig = {
//   apiKey: "AIzaSyBSWjHBpi93uKfs6CLPPCl-x73mU9PvrX0",
//   authDomain: "covor1-e5b50.firebaseapp.com",
//   databaseURL: "https://covor1-e5b50.firebaseio.com",
//   projectId: "covor1-e5b50",
//   storageBucket: "covor1-e5b50.appspot.com",
//   messagingSenderId: "498657504787",
//   appId: "1:498657504787:web:c1a44650f41754c23719e6",
//   measurementId: "G-WPY6REWPMD"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

 
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();
const FaqStack = createStackNavigator();
const Drawer = createDrawerNavigator(); 




const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#e24040'
    },
    headerTintColor:'#fff'
  }}>
  <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
    title:'Profil',
    headerLeft:() => (
      <Icon.Button name="ios-menu" size={25} backgroundColor='#e24040'
      onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }} />
</ProfileStack.Navigator>
);

const SettingStackScreen = ({navigation}) => (
  <SettingStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#e24040'
    },
    headerTintColor:'#fff'
  }}>
  <SettingStack.Screen name="Setting" component={SettingScreen} options={{
    title:'Reglege',
    headerLeft:() => (
      <Icon.Button name="ios-menu" size={25} backgroundColor='#e24040'
      onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }} />
</SettingStack.Navigator>
);

const FaqStackScreen = ({navigation}) => (
  <FaqStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#023969'
    },
    headerTintColor:'#fff'
  }}>
  <FaqStack.Screen name="Faq" component={FaqScreen} options={{
    title:'Aide',
    headerLeft:() => (
      <Icon.Button name="ios-menu" size={25} backgroundColor='#023969'
      onPress={() => navigation.openDrawer()}>
      </Icon.Button>
    )
  }} />
</FaqStack.Navigator>
);




const App = () => {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('haha')
      // setIsLoading(false);
        const userToken = String(foundUser.userToken);
        const userName = foundUser.username;

        try {
          await AsyncStorage.setItem('userToken', userToken)
        } catch(e){
          console.log(e);
        }
      dispatch({ type: 'LOGIN',id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null)
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken')
      } catch(e){
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('haha')
      // setIsLoading(false);
    },
  }), []);


  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken= null;
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e){
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
      
    }, 1000);
  });

  if(loginState.isLoading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return(
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginState.userToken !== null ? (
      <Drawer.Navigator drawerContent={props => <DrawerParts { ...props} /> } >
        <Drawer.Screen name="First" component={BottomTabScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Faq" component={FaqStackScreen} />
        <Drawer.Screen name="Setting" component={SettingStackScreen} />
      </Drawer.Navigator> 
      )
      :
      <AuthentificationScreen />
      }
    </NavigationContainer>
    </AuthContext.Provider>
  )
}


export default App;
