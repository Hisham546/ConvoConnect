import React, { useEffect, useRef, useState } from 'react';

import {
  View,
  Text,
  StyleSheet, TouchableOpacity, TextInput, Keyboard,
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Octicons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import PhoneInput from "react-native-phone-number-input";
import Toast from "react-native-simple-toast";
import database from '@react-native-firebase/database';
import { addingPhoneNumber } from "../../state/counterReducer";
import { useDispatch } from 'react-redux';
import { PacmanIndicator } from 'react-native-indicators';
import { CommonActions } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import Realm from 'realm';
export default function Signup({ navigation }) {




  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '715629424810-qhcg34emjc8ejfd7ejbtrq82d18586bo.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  const [text, setText] = useState();
  const [number, onChangeNumber] = React.useState('');
  const [userDetails, setUserDetails] = React.useState('');
  const [focusControl, setfocusControl] = React.useState(null);
  const phoneInput = useRef(null);
  const [country, setCountry] = useState(['91']);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);


  const dispatch = useDispatch();



  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      setUserDetails(userInfo)
      console.log(userDetails)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {

        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

        // play services not available or outdated
      } else {
        // some other error happeneded
      }
    }
  };
  async function signInWithPhoneNumber(number) {
    storeUserSession(number)
    try {
      const confirmation = await auth().signInWithPhoneNumber(number);
      if (confirmation.state != "error") {
        setLoading(false);
        removeLogin()
        navigation.navigate('Otp', { confirm: confirmation });

      }
    } catch (error) {
      if (error.code == 'auth/too-many-requests') {
        Toast.show('Too-many-requests', Toast.SHORT);
        console.log('auth/too-many-requests', error);
      } else if (error.code === 'auth/user-disabled') {
        Toast.show('Sorry, this phone number has been blocked.', Toast.SHORT)
        console.log('auth/user-disabled', error);
      } else {
        Toast.show('Sorry, we couldn\'t verify that phone number at the moment. '
          + 'Please try again later. '
          + '\n\nIf the issue persists, please contact support.', Toast.SHORT);
        console.log(error);
      }
    }
  };
  const goToDashboard = () => {

    navigation.navigate('Dashboard');

  }
  useEffect(() => {

    async function retrieveUserSession() {
      try {
        const session = await EncryptedStorage.getItem("user_login");

        if (session !== undefined) {
          goToDashboard()

          // console.log(session,'......session')
        }
        else{

          Toast.show("please login", Toast.SHORT);    
        }
      } catch (error) {

      }
    }
    retrieveUserSession()

  }, []);

  const onNext = () => {
    if (phoneNumber === '') {
      Toast.show("Enter your phone number first!", Toast.SHORT);
    } else {
      Keyboard.dismiss();
      setLoading(true);

      dispatch(addingPhoneNumber(phoneNumber));
      signInWithPhoneNumber('+' + country + phoneNumber);
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

  async function storeUserSession() {
    try {
      await EncryptedStorage.setItem(
        "user_login",
        JSON.stringify({

          'number': phoneNumber,

        })
      );

      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
    }
  }

  const PersonSchema = {
    name: 'userNumber',
    primaryKey: 'id',
    properties: {
      id: 'int',
      number:'int'
    },
  };
  const realmConfig = {
    schema: [PersonSchema],
    schemaVersion: 0,
  };
  const addPerson = () => {
    realm.write(() => {
      realm.create('userNumber', {
        id: new Date().getTime(),
        number:'int'
      });
    });


  };
  const onFocus = (control) => {
    setfocusControl(control)
  };

  const saveToDatabase = (newText) => {
    // Create a new data object
    var data = {
      text,
      // a state variable that have message from text input
    };
    // Send the data to the database
    var ref = database().ref("username");
    ref.push(data);

  }

  const checkTextLength = (newText) => {
    setText(newText)
    if (newText.length === 6) {

      saveToDatabase()
    }
    else {
      //   Toast.show('Enter 6 digits.',Toast.SHORT)

    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <MaterialIcon name={'whatsapp'} size={hp('7%')} color={'white'} />
        <Text style={{ color: 'white', fontSize: hp('3'), fontFamily: 'Manrope-Bold', marginTop: hp('2') }}> WhatsApp</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={{ color: 'black', fontSize: hp('1.80'), fontFamily: 'Manrope-Regular' }}> Enter your mobile number to login or register</Text>


        <TextInput
          onFocus={() => onFocus("Name")}
          style={[styles.input, {
            borderBottomWidth: focusControl == "Name" ? 1 : 0.2,
            borderBottomColor: focusControl == "Name" ? 'gray' : 'black'
          }]}
          onChangeText={checkTextLength}
          value={text}
          placeholderTextColor={'gray'}
          placeholder={"Enter your username"}
        />
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="IN"
          layout="first"
          codeTextStyle={{ fontSize: hp('1.75%'), fontWeight: '500', paddingBottom: hp('0.2%') }}
          textInputStyle={{ fontSize: hp('1.75%'), fontWeight: '400', }}
          placeholder="Enter Phone Number"
          placeholderTextColor={'gray'}

          countryPickerProps={{ withAlphaFilter: true }}
          containerStyle={styles.phoneNumberView}
          onChangeText={text => {
            setPhoneNumber(text);
          }}
          onChangeCountry={text => {
            setCountry(text.callingCode.join(','));
          }}
          textContainerStyle={{ paddingVertical: 0 }}
        />

        <TouchableOpacity style={styles.roundButton} onPress={() => onNext()}>
          {loading === true ?
            <PacmanIndicator color='#fff' size={26} />
            :
            <Text style={{ color: 'white', fontSize: hp('2.20'), letterSpacing: wp('.25'), fontFamily: 'Manrope-Bold' }}> SIGN UP</Text>
          }
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
  googleText: {
    fontSize: hp('1.70%'),
    color: 'black',
    letterSpacing: wp('.10%'),
  },
  googleButton: {
    height: hp(6),
    width: wp(68),
    backgroundColor: 'white',
    flexDirection: 'row',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },

  backIcon: {
    marginLeft: wp('4')
  },
  input: {
    width: wp('80%'),
    height: hp('7'),
    borderRadius: 5,
    borderWidth: wp('.4'),
    borderColor: '#128C7E',
  },
  phoneNumberView: {
    marginTop: hp(1),
    justifyContent: 'center',
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: 5,
    borderWidth: wp('.4'),
    borderColor: '#128C7E',

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

  }
})
