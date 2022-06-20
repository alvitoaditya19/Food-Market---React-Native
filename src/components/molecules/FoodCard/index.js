import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Rating from '../Rating'

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image}/>
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text> 
        <Rating/>
      </View>
    </View>
  )
}

export default FoodCard

const styles = StyleSheet.create({
  container:{
    width:200,
    backgroundColor:'white',
    borderRadius:8,
    shadowColor:'black',
    shadowOffset:{width:0, height:7},
    shadowOpacity:0.5,
    shadowRadius:10,
    elevation:14,
    overflow:'hidden',
    marginRight:24,
  },
  image:{
    height:140,
    width:200,
    resizeMode:'cover'
  },  
  content:{
    padding:12,
  },
  text:{
    fontSize:16,
    fontFamily:'Poppins-Regular',
    color:'#020202'
  },
})