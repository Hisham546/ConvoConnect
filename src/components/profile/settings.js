import React, { useEffect, useState } from 'react';

import {
  View,
  Image,
  Text, Button, FlatList,
  StyleSheet, TouchableOpacity,
  TextInput
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import { useSelector, useDispatch } from "react-redux";
import { openModalPopup } from '../../state/chatReducer';
import { PermissionsAndroid } from 'react-native';
import { MMKV } from 'react-native-mmkv'
import { removeDataFromMMKV } from '../../data/mmkvStorage';
export default function Settings({ navigation }) {

  const storage = new MMKV() 

  const openModal = useSelector((state) => state.chatReducer.openModal);
  const profileImage = useSelector((state) => state.chatReducer.profileImage);
  const dispatch = useDispatch()
  const [accountName, setAccountName] = useState('');

  useEffect(() => {
    // database()
    //   .ref('username')
    //   .once('value')
    //   .then(snapshot => {
    //     const data = snapshot.val(); // Retrieve the data from the snapshot
    //     const textValues = Object.values(data).map(item => item.text); // Extract the "text" values
    //     console.log('text values:', textValues);
    //     setAccountName(textValues)

    //   });
    function getUserName() {
      const userId = storage.getString('userName')
    //  console.log(number, 'token generated')
      if (userId != undefined) {
        setAccountName(userId)
      }
    }
    getUserName()
  }, []);


  //--To check the user granted the necessary permissions or not
  const checkCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      console.log('Permission status:', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        dispatch(openModalPopup(true));
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to get the contacts'
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const LogOut = async () => {
    await removeDataFromMMKV()
    navigation.navigate('Signup')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'} style={styles.threeDotIcon} />
        </TouchableOpacity>
        <Text style={styles.settingsHeader}>Settings</Text>
      </View>
      <View style={styles.profileContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => checkCameraPermission()}>
          <Image resizeMode="cover" style={styles.tinyLogo} source={profileImage ? { uri: profileImage } : require('../../assets/profile.jpg')} />
        </TouchableOpacity>
        <View style={{ height: hp('13'), width: wp('30'), justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: hp('1.60'), color: 'black' }}>{accountName}</Text>
          <Text style={{ fontSize: hp('1.50'), color: 'black', marginRight: wp('5'), marginTop: hp('.50') }}>About</Text>
        </View>
      </View>
      <View style={styles.settingsOptions}>
        <MaterialIcon name={'account'} size={hp('3%')} color={'#128c7e'} style={styles.threeDotIcon} />
        <Text style={{ fontSize: hp('1.50'), color: 'black', marginLeft: wp('5') }}>Account</Text>
      </View>
      <View style={styles.settingsOptions}>
        <MaterialIcon name={'security'} size={hp('3%')} color={'#128c7e'} style={styles.threeDotIcon} />
        <Text style={{ fontSize: hp('1.50'), color: 'black', marginLeft: wp('5') }}>Privacy</Text>
      </View>
      <TouchableOpacity style={styles.settingsOptions}onPress={() => LogOut()}>
        <MaterialIcon name={'security'} size={hp('3%')} color={'#128c7e'} style={styles.threeDotIcon} />
        <Text style={{ fontSize: hp('1.50'), color: 'black', marginLeft: wp('5') }}>Log out</Text>
      </TouchableOpacity>

    </View>
  )



}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headingContainer: {
    width: wp('100'),
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('7'),
    backgroundColor: '#128c7e'
  },
  profileContainer: {
    width: wp('100'),
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('13'),
    borderBottomWidth: .2,
    borderBottomColor: '#d8d8d8',
  },
  settingsOptions: {
    width: wp('100'),
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('9'),
    marginLeft: wp('5'),
  },
  settingsHeader: {
    color: 'white',
    fontSize: hp('2.30'),
    marginLeft: wp('8')

  },
  threeDotIcon: {
    marginLeft: wp('4')

  },
  tinyLogo: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: wp('8')
  },




})



