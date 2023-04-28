import React, {useEffect, useState} from 'react';

import {
View,
Image,
Text,Button,FlatList,
StyleSheet,TouchableOpacity,TextInput
}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Octicons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin,statusCodes,GoogleSigninButton   } from '@react-native-google-signin/google-signin';
import { useRecoilState } from "recoil";
import { username } from "../../state/atom";

export default function Signup({navigation}){

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
 const [text, onChangeText] = useRecoilState(username);
  const [number, onChangeNumber] = React.useState('');
  const [userDetails, setUserDetails] = React.useState('');
   const [focusControl, setfocusControl] = React.useState(null);

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
        // some other error happened
      }
    }
  };
 async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }
  const onFocus = (control) => {
        setfocusControl(control)
     };
return(
      <View style={styles.container}>
         <View style={styles.upperView}>
             <Icon name='chevron-left' size={hp('3.20%')}color='white' style={styles.backIcon} />
                <Text style={{color:'white',fontSize:hp('3'),fontFamily:'Manrope-Bold',marginLeft:wp('8')}}> Sign up</Text>
        </View>
            <View style={styles.upperView}>
                 <Text style={{color:'white',fontSize:hp('1.80'),fontFamily:'Manrope-Regular',marginLeft:wp('8')}}> Sign up with the one of the following options</Text>
            </View>
            <View style={styles.centerView}>
             <View style={styles.headingTextView}>
               <Text style={styles.headingText}>Enter your name</Text>
             </View>
                <TextInput
                   onFocus={() => onFocus("Name")}
                    style={[styles.input, {
                          borderWidth: focusControl == "Name" ? 4 : 0.2,
                          borderColor: focusControl == "Name" ? '#77037B' : '#F3E8FF'
                    }]}
                      onChangeText={onChangeText}
                      value={text}
                      placeholderTextColor={'gray'}
                      placeholder={"Name"}
                />
                 <View style={styles.headingTextView}>
                   <Text style={styles.headingText}>Enter your password</Text>
                   </View>
                 <TextInput
                     onFocus={() => onFocus("phone")}
                      style={[styles.input, {
                           borderWidth: focusControl == "phone" ? 4 : 0.2,
                           borderColor: focusControl == "phone" ? '#77037B' : '#F3E8FF'
                      }]}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholderTextColor={'gray'}
                        placeholder={"phone number"}
                 />
                <TouchableOpacity activeOpacity={0.90} style={styles.submitButton}onPress={()=>navigation.navigate('Dashboard')}>
                    <Text style={styles.submitText}>Create account</Text>
                </TouchableOpacity>
                 {/* <GoogleSigninButton
                    style={{ width:wp('40'), height:hp('8') }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={()=>signIn()}

                  />*/}
            </View>
      </View>

)

}

const styles =StyleSheet.create({

   container:{
      flex:1,
      backgroundColor:'black',
      alignItems:'center'
   },
   centerView:{
      width:wp('90%'),
      height:hp('50%'),
      borderColor:'gray',
      backgroundColor:'black',
      justifyContent:'space-evenly',
      alignItems:'center',
   },

   submitButton: {
      height: hp(6),
      width: wp('68'),
      backgroundColor: '#654E92',
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
   googleText:{
      fontSize: hp('1.70%'),
       color: 'black',
       letterSpacing: wp('.10%'),
    },
    googleButton:{
         height: hp(6),
          width: wp(68),
          backgroundColor: 'white',
          flexDirection:'row',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          borderRadius: 20,
          borderWidth:1,
          borderColor:'black',
    },
    upperView:{
        width:wp('100'),
        height:hp('10'),
        flexDirection:'row',
        alignItems:'center',
        marginTop:hp('2')
    },
    backIcon:{
      marginLeft:wp('4')
    },
    input:{
        width:wp('80%'),
        height:hp('7'),
        borderRadius:10,
        backgroundColor:'#413543'
    },
   headingText:{
       fontSize: hp('1.50%'),
        color: 'white',
        letterSpacing: wp('.10%'),
        marginLeft:wp('6')

   },
  headingTextView:{
    width:wp('90'),
    height:hp('5'),
    justifyContent:'center',
    marginTop:hp('3')

  }
})
