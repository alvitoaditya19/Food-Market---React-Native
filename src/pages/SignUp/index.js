import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, TextInput} from '../../components';
import Header from '../../components/molecules/Header';
import {useSelector} from 'react-redux';
import {showMessage, useForm} from '../../utils';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
    // password_confirmation: '',
  });

  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('form: ', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };

  const addPhoto = () => {
    ImagePicker.launchImageLibrary(
      {
        quality: 0.5,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log('Response = ', response);

        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih foto');
        } else {
          const source = {uri: response.uri};
          showMessage('Anda memilih foto', 'success');
          const dataItem = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          setPhoto(source);
          dispatch({type: 'SET_PHOTO', value: dataItem});
          dispatch({type: 'SET_PHOTO_STATUS', value: true});
        }
      },
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Sign Up"
          subTitle="Register and Eat"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image style={styles.photoContainer} source={photo} />
                ) : (
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

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
  photo: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
});
