import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcNext } from '../../assets'

const ItemListMenu = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <IcNext/>
    </View>
  )
}

export default ItemListMenu

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:7
  },
  text:{
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  }
})