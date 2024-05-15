import React, { useState } from 'react';

import {
  View,
  Text, Alert,
  StyleSheet, TouchableOpacity,
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Calls from "./calls";
import Chats from "./chats";
import Status from "./status";
const Tab = createMaterialTopTabNavigator();
import { useSelector, useDispatch } from "react-redux";
import Camera from '../../camera/camera';
import { openModalPopup } from '../../state/chatReducer';
import { PermissionsAndroid } from 'react-native';
import { Menu, MenuItem, } from 'react-native-material-menu';

export default function Dashboard({ navigation }) {

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  function goTOSettings() {
    navigation.navigate('Settings')
    setVisible(false);

  }

  const showMenu = () => setVisible(true);
  const openModal = useSelector((state) => state.chatReducer.openModal);

  const dispatch = useDispatch()

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


  return (


    <View style={styles.container}>
      <View style={styles.topViewContainer}>
        <Text style={{ color: 'white', marginLeft: wp('4'), marginTop: hp('3'), fontSize: hp('2.20') }}>WhatsApp</Text>
        <TouchableOpacity activeOpacity={1} onPress={() => checkCameraPermission()}>
          <MaterialIcon name={'camera-enhance'} size={hp('2.65%')} color={'white'} style={styles.cameraIcon} />
        </TouchableOpacity>
        {openModal ? <Camera /> : null}
        <MaterialIcon name={'magnify'} size={hp('2.65%')} color={'white'} style={styles.searchIcon} />

        {/*  <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
             <MaterialIcon name={'dots-vertical'} size={hp('2.65%')} color={'white'}  style={styles.threeDotIcon} />
             </TouchableOpacity>*/}
        <Menu
          visible={visible}
          style={styles.menuStyle}
          anchor={
            <TouchableOpacity activeOpacity={1} onPress={showMenu}>
              <MaterialIcon name={'dots-vertical'} size={hp('2.65%')} color={'white'} style={styles.threeDotIcon} />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}>
          <MenuItem textStyle={styles.menuTextStyle} onPress={() => goTOSettings()}>Settings</MenuItem>
          <MenuItem textStyle={styles.menuTextStyle} onPress={hideMenu}>About</MenuItem>


        </Menu>

      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'gray',
          tabBarPressColor: 'gray',
          tabBarIndicatorStyle: {
            backgroundColor: 'gray',
            height: 2
          },
          tabBarScrollEnabled: true,
          tabBarLabelStyle: { fontSize: hp('1.40'), textTransform: 'none' },
          tabBarItemStyle: { width: wp('33') },
          tabBarStyle: {
            height: hp('5'),
            width: wp('100'),
            backgroundColor: 'white',

          },
        }} >


        <Tab.Screen name="CHATS" component={Chats} />
        <Tab.Screen name="STATUS" component={Status} />
        <Tab.Screen name="CALLS" component={Calls} />
      </Tab.Navigator>

    </View>


  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#128C7E',
  },
  topViewContainer: {
    width: wp('100'),
    height: hp('10'),

    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchIcon: {
    marginTop: hp('3'),
    marginLeft: wp('4.50')

  },
  cameraIcon: {
    marginTop: hp('3'),
    marginLeft: wp('35')

  },
  threeDotIcon: {
    marginTop: hp('3'),
    marginRight: wp('4')
  },
  menuStyle: {
    backgroundColor: 'white',
    width: wp('40'),
    marginLeft: wp('2.50')

  },
  menuTextStyle: {
    color: 'black',
    fontSize: hp('1.50'),
    fontFamily: 'Manrope-Regular'

  },




});