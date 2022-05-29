import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';

import {deleteUser} from '../redux/actions/Actions';

const Home = () => {
  const navigation = useNavigation();

  const users = useSelector(state => state);

  
  const dispatch = useDispatch();

  const deteletUser = position => {
    dispatch(deleteUser(position));
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={users}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 50,
                alignSelf: 'center',
                backgroundColor: '#fff',
                marginTop: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{marginLeft: 20, fontSize: 20}}>{item.name}</Text>
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 30,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                }}
                onPress={() => {
                  deteletUser(index);
                }}>
                <Text style={{color: 'red'}}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          width: 100,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'green',
          bottom: 20,
          right: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('AddNewUser');
        }}>
        <Text style={{color: '#fff'}}>New User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
