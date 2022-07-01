import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcNext } from '../../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ItemListMenu = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <IcNext/>
      </View>
    </TouchableOpacity>
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