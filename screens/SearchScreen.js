import React, { useState }from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, CheckBox, View, Text, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const SearchScreen = ({navigation}) => {

  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
    return (
      
        <View style={styles.cont}>        
        <StatusBar translucent backgroundColor="transparent" />
          <View style={styles.first}>
                <FontAwesome style={{marginLeft:6, marginRight:4}}
                    name="map-marker"
                    color='#a21010'
                    size={23}
                />
                <TextInput 
                    placeholder="Depart"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black'
                    }]}
                    autoCapitalize="none"
                />
          </View>
          <View style={styles.first}>
                <FontAwesome 
                    name="flag-checkered"
                    color='#a21010'
                    size={20}
                />
                <TextInput 
                    placeholder="Destination"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'black'
                    }]}
                    autoCapitalize="none"
                />
          </View>
          <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox} />
            <Text style={styles.label}>Dans moin de 2 jours!</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkbox} />
            <Text style={styles.label}>Cette semaine!</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected2}
              onValueChange={setSelection2}
              style={styles.checkbox} />
            <Text style={styles.label}>Ce mois-ci!</Text>
          </View>
          </View>
          <TouchableOpacity
                    style={styles.button}>
                    <Text style={[styles.textbutton, {
                        color: '#a21010'
                    }]}>Lancer la recherche</Text>
                </TouchableOpacity>
        </View>
      
    );
  };

  export default SearchScreen;

  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    cont: {
      flex: 3,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingTop: 50,
      paddingBottom:80
  },
    first: {
      flexDirection: 'row',
      margin: 10,
      borderWidth: 1,
      borderColor: '#a21010',
      borderRadius: 10,
      padding: 7
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -3,
    paddingLeft: 10,
    color: '#05375a',
},
container: {
  flex: 1,
  marginLeft:10,
  marginTop:10
},
checkboxContainer: {
  flexDirection: "row",
  marginTop:10
},
checkbox: {
  alignSelf: "center",
},
label: {
  margin: 8,
},
button: {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
},
textbutton: {
  fontSize: 18,
  fontWeight: 'bold'
}

  });
  