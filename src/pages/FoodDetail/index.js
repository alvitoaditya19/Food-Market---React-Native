import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {FoodDummy1, FoodDummy6, IcBackWhite} from '../../assets';
import {Button, Counter, Rating} from '../../components';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy6} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Cherry Healthy</Text>
              <Rating />
            </View>
            <Counter/>
          </View>
          <Text style={styles.desc}>
            Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan
            pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan
            teratur.
          </Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Text style={styles.priceTotal}>IDR 12.289.000</Text>
          </View>
          <View style={styles.button}>
            <Button text="Order Now" onPress={() => navigation.navigate("OrderSummary")}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 22,
    paddingLeft: 22,
  },
  back: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent:{
    flex:1,
  },  
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 4,
  },
  footer:{
    flexDirection:"row",
    paddingVertical:16,
    alignItems:"center"
  },
  button:{
    width:163
  },
  priceContainer:{
    flex:1
  },
  labelTotal:{
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  priceTotal:{
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#020202',
  }
});
