import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

// CARA KE 2
// const Header = (props) => {
//   const{title, subTitle} = props
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.subTitle}>{subTitle}</Text>
//     </View>
//   );
// };
export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 30,
    flexDirection: 'row',
  },
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  subTitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft:-10,
  },
});