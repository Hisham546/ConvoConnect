import React, { useEffect, useRef, useState } from 'react';

import {
  View,
  Image,
  Text, Button,
  StyleSheet, TouchableOpacity, Keyboard,
  TextInput
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { PacmanIndicator } from 'react-native-indicators';
import Toast from "react-native-simple-toast";
import { CommonActions } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import { storeUid } from '../../state/actions';
import { useRealm } from '@realm/react';
import { UserId } from '../../models/realmModels';
import database from '@react-native-firebase/database';
import { storeUserIdMMKV } from '../../data/mmkvStorage';
export default function Otp({ navigation, route }) {

  const mobileNo = useSelector((state) => state.chatReducer.phone);
  const dispatch = useDispatch();
  const realm = useRealm();
  const [confirm, setConfirm] = useState(route.params.confirm);

  const [code, setCode] = useState(route.params.confirm.code ? route.params.confirm.code : '');
  const [loading, setLoading] = useState(false);

  async function confirmCode() {
    try {
      await confirm.confirm(code).then(async () => {

        setLoading(false);
        await storeUserIdMMKV(firebase.auth().currentUser.uid)
         //dispatch(storeUid(firebase.auth().currentUser.uid))
         updateToUserDetails(firebase.auth().currentUser.uid,mobileNo)
        navigation.navigate('Dashboard');
        removeLogin()
      }).catch((error) => {
        console.log(error)
        setLoading(false);
        Toast.show("please check you pin again", Toast.SHORT);

      });
    } catch (error) {
      if (error.code == 'auth/invalid-verification-code') {
        setLoading(false);

      } else if (error.code === 'auth/user-disabled') {
        setLoading(false);
        Toast.show('Sorry, this phone number has been blocked.', Toast.SHORT)

      } else if (error.code === 'auth/invalid-credential') {
        setLoading(false);
        Toast.show('Invalid Credential.', Toast.SHORT)

      } else {
        setLoading(false);
        Toast.show('Sorry, we couldn\'t verify your phone number at the moment. '
          + 'Please try again later. '
          + '\n\nIf the issue persists, please contact support.', Toast.SHORT);

      }
    }
  }


  const removeLogin = () => {
    navigation.dispatch(state => {
      const routes = state.routes.filter(r => r.name !== 'Otp');
      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  };
  const updateToUserDetails = (senderId, phoneNumber) => {
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
       // console.error("Error updating database:", error);
      });
  }
  
  const onSubmit = () => {
    if (code.length === 6) {
      setLoading(true);

      confirmCode();
    } else {
      Toast.show('OTP cannot be empty', Toast.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <MaterialIcon name={'whatsapp'} size={hp('7%')} color={'white'} />
        <Text style={{ color: 'white', fontSize: hp('3'), fontFamily: 'Manrope-Bold', marginTop: hp('2') }}> WhatsApp</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={{ color: 'black', fontSize: hp('1.80'), fontFamily: 'Manrope-Regular' }}> Enter the OTP received in  {mobileNo}</Text>
        <OTPInputView
          pinCount={6}
          style={styles.enterPin}
          code={code}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeChanged={text => setCode(text)}
          onCodeFilled={() => Keyboard.dismiss()}
        />
        <TouchableOpacity style={styles.roundButton} onPress={() => onSubmit()}>
          {loading === true ?
            <PacmanIndicator color='#fff' size={25} />
            :
            <Text style={{ color: 'white', fontSize: hp('2.20'), letterSpacing: wp('.25'), fontFamily: 'Manrope-Bold' }}> REGISTER</Text>}
        </TouchableOpacity>


      </View>
    </View>

  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondView: {
    width: wp('100%'),
    height: hp('60%'),
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  upperView: {
    width: wp('100'),
    height: hp('40'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#128C7E',

  },
  submitButton: {
    height: hp(6),
    width: wp('68'),
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  submitText: {
    fontSize: hp('1.70%'),
    color: 'white',
    letterSpacing: wp('.10%'),
  },
  backIcon: {
    marginLeft: wp('4')
  },
  input: {
    width: wp('80%'),
    height: hp('5'),
  },
  headingText: {
    fontSize: hp('1.50%'),
    color: 'white',
    letterSpacing: wp('.10%'),
    marginLeft: wp('6')
  },
  headingTextView: {
    width: wp('90'),
    height: hp('5'),
    justifyContent: 'center',
    marginTop: hp('3')
  },
  roundButton: {
    width: wp('80'),
    height: hp('6.5'),
    borderRadius: 19,
    flexDirection: 'row',
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  enterPin: {
    height: hp('6.75%'),
    width: wp('80%'),
    margin: wp('1%'),

    padding: 10,
    marginTop: 10,
  },
  underlineStyleBase: {
    width: wp('8'),
    height: 45,
    borderWidth: 0,
    borderBottomWidth: wp('.40'),
    borderBottomColor: "gray",
    color: '#128C7E',
  },
  underlineStyleHighLighted: {
    borderColor: "red",
  },
})
