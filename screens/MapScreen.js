import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const MapScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <Text >Carte</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default MapScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  