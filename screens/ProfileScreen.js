import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';





const ProfileScreen = ({navigation}) => {
    return (
      <View style={{flex:1, backgroundColor:'#fff'}}>
        <View style={styles.container1}>
          <Avatar.Image 
          source={require('../assets/avatar.png')}
          size={120}
          style={{borderColor:'#fff', borderWidth:0.2}}
          />
        </View>
        <Animatable.View 
          animation="fadeInUpBig"
          duraton="1500"
          style={{backgroundColor:'#fff'}}>
          <View style={{marginLeft:15, flexDirection:'column'}}>
            <View style={{flexDirection:'row', marginTop:40, marginBottom:10}}>
              <Title >Ayman Tahri</Title>
              <TouchableOpacity>
                <Icon 
                  name="circle-edit-outline" 
                  size={25}
                  style={{padding:5, marginLeft:'65%'}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginVertical:10}}>
            <Caption style={{fontSize:15, color:'#000'}}>Covoitureur</Caption>
              <TouchableOpacity>
                <Icon 
                  name="circle-edit-outline" 
                  size={25}
                  style={{padding:5, marginLeft:'71%'}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginVertical:10}}>
            <Caption style={{fontSize:15, color:'#000'}}>0624907062</Caption>
              <TouchableOpacity>
                <Icon 
                  name="circle-edit-outline" 
                  size={25}
                  style={{padding:5, marginLeft:'70%'}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginVertical:10}}>
            <Caption style={{fontSize:15, color:'#000'}}>tahriayman@gmail.com</Caption>
              <TouchableOpacity>
                <Icon 
                  name="circle-edit-outline" 
                  size={25}
                  style={{padding:5, marginLeft:'53%'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    );
  };

  export default ProfileScreen;

  const styles = StyleSheet.create({
    container1: {
      backgroundColor: '#e24040',
      alignItems: 'center',
      justifyContent: 'center',
      height:'40%',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25    
    },
  });
  