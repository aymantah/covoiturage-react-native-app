
import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'


export default function Items (props) {
    
    const ctgr = props.ctgr
    return (
      <View style={styles.main_container}>
        <TouchableOpacity>
          <View style={styles.opacity}>
            <View>
              <Image source={ctgr.src} style={styles.img} />
            </View>
  
            <View style={styles.content_container}>
              <Text style={styles.title_text}>{ctgr.title}</Text>
              <Text style={styles.description_text2}>{ctgr.from} -- {ctgr.to} </Text>
              <Text style={styles.description_text} numberOfLines={3}>{ctgr.overview}</Text>
            </View>

          </View>
       
        </TouchableOpacity>

      </View>
     
    )
  }


const styles = StyleSheet.create({
  main_container: {
    height: 110,
    marginTop:5,
    marginBottom:10,
    borderWidth: 3,
    borderColor: "#023969",
    borderRadius: 10
  },
  opacity:{
    flexDirection:'row',
  },
  img: {
    width: 70,
    height: 60,
    borderRadius:10,
    marginTop:25 ,
    marginRight:5
  },

  content_container: {
    flexDirection:'column',
    margin:5

  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  },

  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    fontSize: 12,
  },
  description_text2: {
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 13,
  

  },
  
})

