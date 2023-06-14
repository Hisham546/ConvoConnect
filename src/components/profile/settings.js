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
import { useRecoilState } from "recoil";
import { username } from "../../state/atom";

export default function Settings({navigation}){
 const [name] = useRecoilState(username);
 return(
          <View style={styles.container}>
             <View style={styles.headingContainer}>
                 <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
                          <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
                          </TouchableOpacity>
               <Text style={styles.settingsHeader}>Settings</Text>
             </View>
          <View style={styles.profileContainer}>

                        <Text style={styles.settingsHeader}>{name}</Text>
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
   profileContainer:{
     width:wp('100'),
     flexDirection:'row',
     alignItems:'center',
     height:hp('7'),
     backgroundColor:'white'
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



