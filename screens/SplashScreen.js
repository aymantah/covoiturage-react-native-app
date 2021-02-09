import React from 'react';
import { View, Text, TouchableOpacity, Dimensions,StyleSheet,StatusBar,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import SignInScreen from './SignInScreen'


const SplashScreen = ({navigation}) => {


    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#023969' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/covor.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
            <Animatable.Text animation="bounceIn"
                duraton="1500" style={styles.logotext}>Covoiturage A L'oriental</Animatable.Text>
        </View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: 'white'
            }]}
            animation="fadeInUpBig"
        >
            <Text style={styles.title}>Vous chercher un trajet !</Text>
            <Text style={styles.text}>On vous propose plusieurs</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate(SignInScreen)}>
                <View style={styles.signIn}>
                    <Text style={styles.textSign}>Se Connecter</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#023969'
                        size={20}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('First')}>
                <View style={styles.signIn}>
                    <Text style={styles.textSign}>Parcourir</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color='#023969'
                        size={20}
                    />
                </View>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#023969'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  logotext: {
    fontSize:24,
    color:'white'
},
  title: {
      color: '#023969',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  text: {
      color: 'grey',
      marginTop:5,
      textAlign: 'center'
  },
  button: {
      alignItems: 'center',
      marginTop: 30,
      marginLeft:5
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      flexDirection: 'row',
  },
  textSign: {
      color: '#023969',
      fontWeight: 'bold',
      fontSize:16
  }
});

