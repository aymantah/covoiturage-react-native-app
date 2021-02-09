import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../context';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function DrawerParts (props) {

    const {signOut} = React.useContext(AuthContext);

    return (

    
        <View style={{flex:1}}>
            <DrawerContentScrollView { ...props} >
                <View style={styles.Content1}>
                    <View style={styles.Info}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../assets/covor.png')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Ayman Tahri</Title>
                                <Caption style={styles.role}>Covoitureur</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.Section}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Accueil"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        
                       
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="help-circle-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Aide"
                            onPress={() => {props.navigation.navigate('Faq')}}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section>
                <View style={styles.Sect}>
                    <TouchableOpacity style={{flexDirection:"row",marginVertical:8}}>
                    <Icon 
                        name="playlist-edit" 
                        size={25}
                        color={'#777777'}
                        style={{marginLeft:20}}
                        
                        />
                        <Text style={styles.drwtxt}>Mes offres</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"row",marginVertical:8}} 
                    onPress={() => {props.navigation.navigate('Profile')}}>
                    <Icon 
                        name="account-settings" 
                        size={25}
                        color={'#777777'}
                        style={{marginLeft:20}}
                        />
                        <Text style={styles.drwtxt}>Modifier mon profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"row", marginVertical:8}}>
                    <Icon 
                        name="delete-outline" 
                        size={25}
                        color={'#777777'}
                        style={{marginLeft:20}}
                        />
                       <Text style={styles.drwtxt}>Supprimer mon compte</Text>
                    </TouchableOpacity>
                </View>
            </Drawer.Section>
            <Drawer.Section style={styles.bottom}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
   
    );
}


const styles = StyleSheet.create({
    Content1: {
      flex: 1,
    },
    Info: {
      paddingLeft: 20,
    },
    drwtxt: {
        fontSize: 14,
      marginTop:3,
      marginLeft:30,
      marginBottom: 10,
      color: '#666666'
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      fontWeight: 'bold',
    },
    role: {
      fontSize: 13,
      lineHeight: 14,
    },
    Section: {
      marginTop: 55,
      borderTopColor: '#f4f4f4',
      borderTopWidth:2
        
    },
    Sect:{
        paddingTop:30,
        marginBottom:20,
        borderTopColor:'#f4f4f4',
        borderTopWidth:2
    },
    bottom: {
        marginBottom: 15,
        
    },
  });