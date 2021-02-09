import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import MapScreen from './MapScreen';
import AddScreen from './AddScreen';


const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const MapStack = createStackNavigator();
const AddStack = createStackNavigator();


const BottomTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Parcourir',
          tabBarColor:'#023969',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Rechercher',
          tabBarColor:'#a21010',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScreen}
        options={{
          tabBarLabel: 'Carte',
          tabBarColor:'#0763c5',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddStackScreen}
        options={{
          tabBarLabel: 'Proposer',
          tabBarColor:'#e24040',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-add-circle" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default BottomTabScreen;


const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#023969'
      },
      headerTintColor:'#fff'
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'Parcourir',
      headerLeft:() => (
        <Icon.Button name="ios-menu" size={25} backgroundColor='#023969'
        onPress={() => navigation.openDrawer()}>
        </Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
  );
  
  const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#a21010'
      },
      headerTintColor:'#fff'
    }}>
    <SearchStack.Screen name="Search" component={SearchScreen} options={{
      title:'Rechercher',
      headerLeft:() => (
        <Icon.Button name="ios-menu" size={25} backgroundColor='#a21010'
        onPress={() => navigation.openDrawer()}>
        </Icon.Button>
      )
    }}/>
  </SearchStack.Navigator>
  );
  
  const MapStackScreen = ({navigation}) => (
    <MapStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#0763c5'
      },
      headerTintColor:'#fff'
    }}>
    <MapStack.Screen name="Map" component={MapScreen} options={{
      title:'Carte',
      headerLeft:() => (
        <Icon.Button name="ios-menu" size={25} backgroundColor='#0763c5'
        onPress={() => navigation.openDrawer()}>
        </Icon.Button>
      )
    }} />
  </MapStack.Navigator>
  );

  const AddStackScreen = ({navigation}) => (
    <AddStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#e24040'
      },
      headerTintColor:'#fff'
    }}>
    <AddStack.Screen name="Add" component={AddScreen} options={{
      title:'Proposer',
      headerLeft:() => (
        <Icon.Button name="ios-menu" size={25} backgroundColor='#e24040'
        onPress={() => navigation.openDrawer()}>
        </Icon.Button>
      )
    }} />
  </AddStack.Navigator>
  );

  