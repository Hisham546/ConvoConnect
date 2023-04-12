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

export default function Signup(navigation){
 const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
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
                   <TouchableOpacity activeOpacity={0.90} style={styles.submitButton}>
                      <Text style={styles.submitText}>Create account</Text>
                    </TouchableOpacity>
                     <TouchableOpacity activeOpacity={0.90} style={styles.googleButton}>
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
