import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ProfileDummy,
} from '../../assets';
import { ProfileTabSection } from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}> 
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} style={styles.photoContainer}/>
          </View>
        </View>
        <Text style={styles.name}>Angga Risky</Text>
        <Text style={styles.email}>wepanda@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection/>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page:{
    flex:1
  },
  content:{
    marginTop:24,
    flex:1
  },
  profileDetail:{
    backgroundColor:'white',
    paddingBottom:26,
  },
  name:{
    fontSize:18,
    fontFamily:'Poppins-Medium',
    color:"#020202",
    textAlign:'center',
  },
  email:{
    fontSize:14,
    marginTop:6,
    fontFamily:'Poppins-Light',
    color:"#8D92A3",
    textAlign:'center',
  },
  photo:{
    alignItems:'center',
    marginTop:24,
    marginBottom:16,
  },
  borderPhoto:{
    borderWidth:1,
    borderColor:"#8D92A3",
    width:110,
    height:110,
    borderRadius:110,
    borderStyle:"dashed",
    justifyContent:"center",
    alignItems:"center"
  },
  photoContainer:{
    width:90,
    height:90,
    borderRadius:90,
    padding:24
  },  
});
