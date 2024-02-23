import React, { useEffect, useRef, useState } from 'react';

import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, Keyboard,
    TextInput
}
    from "react-native";
    import { useSelector, useDispatch } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { openModalPopup } from '../../state/chatReducer';
import { PermissionsAndroid } from 'react-native';
import Camera from '../../camera/camera';
export default function AddPhoto({ navigation }) {

    const image = 'https://legacy.reactjs.org/logo-og.png';
    const profileImage = useSelector((state) => state.chatReducer.profileImage);
    const openModal = useSelector((state) => state.chatReducer.openModal);
    const dispatch = useDispatch()



    const updateImage = (senderId, phoneNumber) => {
        // Query the database to find the entry with the matching phoneNumber
        var ref = database().ref("userdetails");
        ref.orderByChild("phoneNumber").equalTo(phoneNumber).once("value")
          .then(snapshot => {
            // Loop through the snapshot to get the key of the entry
            snapshot.forEach(childSnapshot => {
              const key = childSnapshot.key;
              // Update the existing entry with the senderId
              ref.child(key).update({ senderId });
            });
          })
          .catch(error => {
            console.error("Error updating database:", error);
          });
      }



      const checkCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA
          );
          console.log('Permission status:', granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            dispatch(openModalPopup(true));
            console.log('hi')
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





        <View style={StyleSheet.container}>
             {openModal ? <Camera /> : null}
            <Text>Add photo</Text>
            <View style={styles.profileContainer}>
            <TouchableOpacity activeOpacity={1} onPress={() => checkCameraPermission()}>
          <Image resizeMode="cover" style={styles.tinyLogo} source={profileImage ? { uri: profileImage } : require('../../assets/profile.jpg')} />
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}
        >
          <Text>Complete</Text>
          </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({

    container: {
       flex:1,
        backgroundColor: 'white',
    },
    profileContainer: {
        width: wp('100'),
      justifyContent:'center',
        alignItems: 'center',
        height: hp('53'),
        borderBottomWidth: .2,
        borderBottomColor: '#d8d8d8',
        backgroundColor:'red'
      },
      tinyLogo: {
        height: 90,
        width: 90,
        borderRadius: 45,
        marginLeft: wp('8')
      },
})