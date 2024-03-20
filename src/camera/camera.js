import ImagePicker from 'react-native-image-crop-picker';
import React, { useEffect, useRef, useState } from 'react';

import {
  View,
  Image,
  Text, Modal, Dimensions,
  StyleSheet, TouchableOpacity,
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import { openModalPopup, updateProfileImage } from '../state/chatReducer';
import database from '@react-native-firebase/database';
import { getNumberFromMMKV } from '../data/mmkvStorage';
const { width } = Dimensions.get("window");

export default function Camera(navigation) {

  const openModal = useSelector((state) => state.chatReducer.openModal);
  // const mobileNo = useSelector((state) => state.chatReducer.phone);
  const profileImage = useSelector((state) => state.chatReducer.profileImage);
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch()
  useEffect(() => {
    const checkUserSession = async () => {
      const isUserSessionSaved = await getNumberFromMMKV();
      console.log(isUserSessionSaved, '..............got'),
        setPhoneNumber(isUserSessionSaved)

    };
    checkUserSession();
  }, []);



  const chooseImage = (cropping) => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      dispatch(updateProfileImage(image.path))
      updateToUserDetails(image.path, phoneNumber)
      dispatch(openModalPopup(false))
    });
  }
  const chooseGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      dispatch(updateProfileImage(image.path))
      updateToUserDetails(image.path, phoneNumber)
      dispatch(openModalPopup(false))
    });
  }

  const updateToUserDetails = (image, phoneNumber) => {

    // Query the database to find the entry with the matching phoneNumber
    var ref = database().ref("userdetails");
    ref.orderByChild("phoneNumber").equalTo(phoneNumber).once("value")
      .then(snapshot => {
        // Loop through the snapshot to get the key of the entry
        snapshot.forEach(childSnapshot => {
          const key = childSnapshot.key;
          //console.log(key, '.............')
          // Update the existing entry with the senderId
          ref.child(key).update({ image });
        });
      })
      .catch(error => {
       // console.error("Error updating database:", error);
      });

  }

  return (



    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}>
      <View style={styles.TransparentView}>
        <View style={styles.modalView}>
          <View style={styles.mainView}>
            <View style={{ width: wp('100'), flexDirection: 'row', justifyContent: 'space-around', height: hp('7') }}>
              <Text style={{ fontFamily: 'Manrope-Bold', fontSize: hp('2.10'), color: 'black', marginTop: hp('2.50'), marginRight: wp('43.50') }}> Add Photo</Text>
              <TouchableOpacity activeOpacity={1} style={styles.closeButton}
                onPress={() => dispatch(openModalPopup(false))}>
                <MaterialIcon name={'close-circle-outline'} size={hp('3%')} color={'black'} style={styles.threeDotIcon} />
              </TouchableOpacity>
            </View>
            <View style={{ width: wp('100'), height: hp('17'), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
              <View style={styles.iconView}>

                <TouchableOpacity onPress={() => chooseImage()} style={{
                  width: 50, height: 50,
                  borderRadius: 25, borderColor: '#9DC08B', justifyContent: 'center', alignItems: 'center', borderWidth: wp('.3')
                }}>
                  <MaterialIcon name={'camera-enhance-outline'} size={hp('3%')} color={'gray'} />
                </TouchableOpacity>

                <Text style={styles.cameraTexts}> Camera</Text>
              </View>
              <View style={styles.iconView}>
                <TouchableOpacity onPress={() => chooseGallery()} style={{
                  width: 50, height: 50,
                  borderRadius: 25, borderColor: '#9DC08B', justifyContent: 'center', alignItems: 'center', borderWidth: wp('.3')
                }}>
                  <MaterialIcon name={'image'} size={hp('3%')} color={'gray'} />
                </TouchableOpacity>
                <Text style={styles.cameraTexts}>Gallery</Text>

              </View>
            </View>
          </View>
        </View>
      </View>

    </Modal>


  )
}

const styles = StyleSheet.create({



  modalView: {
    position: "absolute",
    top: hp('88%'),
    left: wp('40%'),
    elevation: 10,
    transform: [{ translateX: -(width * 0.4) },
    { translateY: -90 }],
    height: hp('24%'),
    width: width * 1,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  mainView: {
    width: wp('100'),
    height: hp('23'),
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  closeButton: {
    width: wp('5'),
    height: hp('5'),
    marginTop: hp('2.50'),


  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  cameraTexts: {
    color: 'black',
    fontSize: hp('1.50'),
    fontFamily: 'Manrope-Regular',
    marginTop: hp('1')

  },
  iconView: {
    width: wp('18'),
    height: hp('10'),
    justifyContent: 'center',
    alignItems: 'center'

  },
  TransparentView: {
    flex: 1,
    backgroundColor: "rgba(44, 44, 44, 0.7)",
  },
})