import React, { useState }from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, CheckBox, View, Text, TextInput, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';


// const GetDate = () =>{

//   return(
//     <DateTimePicker 
//         value={ date }
//         mode='default'
//         display='default'
//         onChange={ date => this.setState({ date }) } />
//   )
// }
const AddScreen = ({navigation}) => {

  // state = {
  //   date: new Date(),
  // }
  // const { date } = this.state;
  
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);

    return (
      <View style={styles.cont}>        
        <StatusBar translucent backgroundColor="transparent" />
          <View style={styles.first}>
            <Image source={require('../assets/pars.png')} style={styles.pars}/>
            <View style={styles.input}>
              <View style={styles.input2}>
                <TextInput 
                    placeholder="Ville de depart"
                    placeholderTextColor="#666666"
                    style={{color: 'black',borderBottomWidth:0.5,paddingVertical:5,marginRight:10,borderColor:'#797979'}}
                    autoCapitalize="none"/>
                <TextInput 
                    placeholder="Heure de depart"
                    placeholderTextColor="#666666"
                    autoCapitalize="none"/>
              </View>
              <View style={styles.input2}>
                <TextInput 
                    placeholder="Ville d'arrivee"
                    placeholderTextColor="#666666"
                    style={{color: 'black',borderBottomWidth:0.5,paddingVertical:5,marginRight:10,borderColor:'#797979'}}
                    autoCapitalize="none"/>
                <TextInput 
                    placeholder="Heure d'arrivee"
                    placeholderTextColor="#666666"
                    autoCapitalize="none"/>
              </View>
            </View>
          </View>

          <View style={{flexDirection:'column', marginLeft:8, marginTop:5}}>
            <Text style={{color:"#666666", marginLeft:2}}> Selectioner la date </Text>
            <TouchableOpacity style={{margin:5,
               borderWidth:1,
                borderColor:'#e24040',
                 borderRadius:6,
                 width:'90%',
                 padding:3}}>
              <Text style={{color:"#666666"}}> --/--/--- </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox} />
            <Text style={styles.label}>Trajet ponctuel</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected1}
              onValueChange={setSelection1}
              style={styles.checkbox} />
            <Text style={styles.label}>Trajet reguliere</Text>
          </View>
          </View>
          <TouchableOpacity
                    style={styles.button}>
                    <Text style={[styles.textbutton, {
                        color: '#e24040'
                    }]}>Proposer</Text>
                </TouchableOpacity>
        </View>
    );
  };

  export default AddScreen;

  const styles = StyleSheet.create({
    cont: {
      flex: 3,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom:60
  },
  input: {
    flexDirection: 'column',
    width:'90%',
    marginHorizontal:10
},
input2: {
  flexDirection: 'column',
  borderWidth:1,
  borderRadius:10,
  borderColor:'#e24040',
  marginVertical:10,
  paddingLeft:40,
  paddingBottom:8 
},
first: {
      flexDirection: 'row',
},
pars:{
  position:'absolute',
  top:39,
  left:15
},
container: {
  flex: 1,
  marginLeft:10,
  marginTop:15,
  marginBottom:30
},
checkboxContainer: {
  flexDirection: "row",
  marginTop:5,
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
  
  