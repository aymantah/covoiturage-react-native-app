import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';




const FaqScreen = ({navigation}) => {
    return (

      <View style={styles.container}>
          <View style={styles.header}>
          <View style={{paddingHorizontal:20, paddingTop:30}}>
        <TouchableOpacity style={{flexDirection:'row'}}>
        <Icon 
                                name="arrow-right-circle-outline" 
                                size={20}
                                style={{margin:10}}
                                />
        <Text style={{margin:10}}>A propos de COVOR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}}>
        <Icon 
                                name="arrow-right-circle-outline" 
                                size={20}
                                style={{margin:10}}
                                />
        <Text style={{margin:10}}>Comment proposer une offre de trajet?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}}>
        <Icon 
                                name="arrow-right-circle-outline" 
                                size={20}
                                style={{margin:10}}
                                />
        <Text style={{margin:10}}>Comment profiter une offre?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}}>
        <Icon 
                                name="arrow-right-circle-outline" 
                                size={20}
                                style={{margin:10}}
                                />
        <Text style={{margin:10}}>Nous contacter</Text>
        </TouchableOpacity>
      </View>
            
          <Animatable.View 
            style={[styles.footer, {
                backgroundColor: '#023969'
            }]}
            animation="fadeInUpBig"
            duraton="1500">

              <TouchableOpacity>
              <View style={styles.contact}>
                <Icon 
                  name="whatsapp" 
                  size={20}
                  style={{margin:10, paddingLeft:35}}
                  color='green'
                />
                <Text>Discuter avec nous</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={styles.contact}>
              <Icon 
                  name="email-outline" 
                  size={20}
                  style={{margin:10, paddingLeft:45}}
                  color='red'
                />
                <Text>Contactez nous</Text>

              </View>
              </TouchableOpacity>
            
          </Animatable.View>
        </View>
      </View>


     

      

    );
  };

  export default FaqScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20
      
  },
  footer: {
      flex: 1,
      backgroundColor: '#023969',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop:'50%',
      paddingHorizontal: '10%',
      paddingTop:10
  },
  contact:{
    backgroundColor: '#fff',
    alignItems:'center',
    width:250,
    height:40,
    marginTop:20,
    borderRadius:20,
    flexDirection:'row'

  }
  
});

 
 
  