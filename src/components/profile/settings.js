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
export default function Settings(navigation){
 return(
          <View style={styles.container}>
             <View style={styles.headingContainer}>
                 <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                          <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
                          </TouchableOpacity>
               <Text style={styles.settingsHeader}>Settings</Text>
             </View>
          </View>
       )



}

const styles =StyleSheet.create({

   container:{
     flex:1,
     backgroundColor:'white'
   },
   headingContainer:{
     width:wp('100'),
     flexDirection:'row',
     alignItems:'center',
     height:hp('7'),
     backgroundColor:'#128c7e'
  },
  settingsHeader:{
     color:'white',
     fontSize:hp('2.30'),
     marginLeft:wp('8')

  },
     threeDotIcon:{
      marginLeft:wp('4')

     }




})



