import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {Button, Gap, Select, TextInput} from '../../components';
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import { showMessage, hideMessage } from "react-native-flash-message";

import Axios from 'axios';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();

  const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };

    //  const data = {
    //   "name":"cobaa",
    //   "email":"cobaa33@gmail.com",
    //   "password":"cobaa2344",
    //   "password_confirmation":"cobaa2344",
    //   "city":"Karawang",
    //   "houseNumber":"12",
    //   "phoneNumber":"081132323398",

    // }
    console.log('data', data);

    // Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
    //   .then(res => {
    //     console.log('data success: ', res.data);
    //     navigation.replace('SuccessSignUp');
    //   })
    //   .catch(err => {
    //     console.log('sign up error : ', err);
    //     console.log('What happened? ', err.message);
    //   });

 
          Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        console.log('data success: ', res.data);
        showToast('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        console.log('sign up error : ', err.response.data.message);
        showToast(err?.response?.data?.message, 'success');
      })


  };

  const showToast = (message, type) => {
    showMessage({
      message: message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
      titleStyle:{ fontSize: 14, fontFamily: 'Poppins-Regular' }
    });
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subTitle="Make sure it’s valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign Up Now" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
