import React, {useEffect, useState} from 'react';

import {
View,
Image,
Text,Button,FlatList,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Signup({navigation}){

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '715629424810-qhcg34emjc8ejfd7ejbtrq82d18586bo.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
  profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});
 const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
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
return(
      <View style={styles.container}>
         <View style={styles.centerView}>
              <Text style={{color:'black'}}>Create an account</Text>
                <TextInput
                      style={styles.input}
                      onChangeText={onChangeText}
                      value={text}
                      placeholderTextColor={'black'}
                      placeholder={"Name"}
                    />
                  <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholderTextColor={'black'}
                        placeholder={"phone number"}
                  />
                   <TouchableOpacity activeOpacity={0.90} style={styles.submitButton}onPress={()=>navigation.navigate('Dashboard')}>
                      <Text style={styles.submitText}>Create account</Text>
                    </TouchableOpacity>
                     <TouchableOpacity activeOpacity={0.90} style={styles.googleButton} onPress={()=>onGoogleButtonPress()}>
                        <MaterialIcon name={'google'} size={hp('2.80%')} color={'rgba(15 157 88)'}  style={styles.threeDotIcon} />
                            <Text style={styles.googleText}>Sign up with Google</Text>
                     </TouchableOpacity>
         </View>
      </View>

)

}

const styles =StyleSheet.create({

   container:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'white',
      alignItems:'center'
   },
   centerView:{
      width:wp('70%'),
      height:hp('50%'),
      borderColor:'gray',
      justifyContent:'space-evenly',
      alignItems:'center'
   },
   input:{
      height: hp(2.8),
      width: wp('68%'),
      color: 'black',
      marginTop: hp('.70'),
      padding: 0,
      fontSize: hp('1.50%'),
      fontWeight: '300',
      borderBottomColor: 'grey',
      borderBottomWidth:1,
      paddingLeft: wp('1%')

   },
   submitButton: {
      height: hp(6),
      width: wp('68'),
      backgroundColor: 'black',
      color: 'white',
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



    }


})
