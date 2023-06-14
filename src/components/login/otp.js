import React, {useEffect,useRef,useState} from 'react';

import {
View,
Image,
Text,Button,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'

 export default function Otp({navigation,route}){
const [confirm,setConfirm] = useState(route.params.confirm);
const [code,setCode] = useState(route.params.confirm.code ? route.params.confirm.code : '');
 return(
       <View style={styles.container}>
          <View style={styles.upperView}>
             {/* <Icon name='chevron-left' size={hp('3.20%')}color='white' style={styles.backIcon} />*/}
                 <Text style={{color:'white',fontSize:hp('3'),fontFamily:'Manrope-Bold',marginLeft:wp('8')}}> WhatsApp</Text>
         </View>
             <View style={styles.secondView}>
              <Text style={{color:'black',fontSize:hp('1.80'),fontFamily:'Manrope-Regular'}}> Waiting to automatically detect and send sms to ..</Text>

                 <OTPInputView
                              pinCount={6}
                              style = {styles.enterPin}
                              code={code}
                             autoFocusOnLoad = {false}
                              codeInputFieldStyle = {styles.underlineStyleBase}
                              codeInputHighlightStyle = {styles.underlineStyleHighLighted}
                              onCodeChanged={text => setCode(text)}
                              onCodeFilled={() => Keyboard.dismiss()}
                            />


                         <TouchableOpacity style={styles.roundButton}   onPress={() => onNext()}>
                         <Icon name='chevron-right' size={hp('3.20%')}color='white'  />
                           </TouchableOpacity>

             </View>
       </View>

 )

 }

 const styles =StyleSheet.create({

    container:{
       flex:1,
       backgroundColor:'white',

    },
    secondView:{
       width:wp('100%'),
       height:hp('60%'),
       backgroundColor:'white',
       justifyContent:'space-evenly',
       alignItems:'center',

    },
     upperView:{
         width:wp('100'),
         height:hp('40'),
         flexDirection:'row',
         alignItems:'center',
         backgroundColor:'#128C7E',

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

     backIcon:{
       marginLeft:wp('4')
     },
     input:{
         width:wp('80%'),
         height:hp('5'),

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

   },

          roundButton:{
          width:wp('11'),
          height:hp('5.5'),
          borderRadius:20,
          backgroundColor:'#128C7E',
          justifyContent:'center',
          alignItems:'center',
          marginLeft:wp('70')

          },


              enterPin: {
                 height : hp('6.75%'),
                 width : wp('90%'),
                 margin:wp('1%'),
                 padding: 10,
                 marginLeft:wp('6.50%'),
                 marginTop:10,

               },
 })
