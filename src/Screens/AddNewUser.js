import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ADD_USER} from '../redux/actionTypes';
import {addUser} from '../redux/actions/Actions';
import {useNavigation} from '@react-navigation/native';

const AddNewUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  
  const navigation = useNavigation();
  
  const dispatch = useDispatch();
  const saveUser = () => {
    dispatch(addUser({name: name, age: age, contact: contact}));
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, padding: 30}}>
      <TextInput
        placeholder="Name"
        style={{
          width: '100%',
          height: 40,
          borderRadius: 10,
          borderWidth: 1,
          paddingLeft: 20,
        }}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        placeholder="Age"
        style={{
          width: '100%',
          height: 40,
          borderRadius: 10,
          borderWidth: 1,
          paddingLeft: 20,
          marginTop: 20,
        }}
        keyboardType={'number-pad'}
        onChangeText={txt => setAge(txt)}
      />
      <TextInput
        placeholder="Contact"
        style={{
          width: '100%',
          marginTop: 20,
          height: 40,
          borderRadius: 10,
          borderWidth: 1,
          paddingLeft: 20,
        }}
        keyboardType={'number-pad'}
        onChangeText={txt => setContact(txt)}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          borderRadius: 10,
          backgroundColor: 'blue',
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          saveUser();
        }}>
        <Text style={{color: '#fff'}}>Save User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewUser;
