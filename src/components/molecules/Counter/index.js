import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcMin, IcPlus } from '../../../assets'

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin/>  
      </TouchableOpacity>
      <Text style={styles.value}>14</Text>
      <TouchableOpacity>
        <IcPlus/>
      </TouchableOpacity>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center"
  },
  value:{
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginHorizontal:10,
    color: '#020202',
  }
})