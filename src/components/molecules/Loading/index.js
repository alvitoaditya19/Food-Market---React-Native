import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1ABC9C"/>
      <Text style={styles.text}>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container:{
    position:'absolute',
    backgroundColor:'rgba(0,0,0,0.1)',
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontFamily:'Poppins-Regular',
    marginTop:12,
    color:"#1ABC9C"
  }
})