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
                  <Image resizeMode="cover"  style={styles.tinyLogo} source={require('../../assets/profile.jpg')}  />
                        <Text style={{fontSize:hp('1.50'),color:'black',marginLeft:wp('15')}}>Username</Text>

                      </View>
    <View style={styles.profileContainer}>
             <MaterialIcon name={'account'} size={hp('3%')} color={'#128c7e'}  style={styles.threeDotIcon} />
                          <Text style={{fontSize:hp('1.50'),color:'black',marginLeft:wp('15')}}>Account</Text>
                        </View>

 <View style={styles.profileContainer}>
              <MaterialIcon name={'security'} size={hp('3%')} color={'#128c7e'}  style={styles.threeDotIcon} />
                           <Text style={{fontSize:hp('1.50'),color:'black',marginLeft:wp('15')}}>Privacy</Text>
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
     height:hp('13'),
    //justifyContent:"space-evenly",
     backgroundColor:'white',
        borderBottomWidth: .2,
        borderBottomColor: '#d8d8d8',
  },
  settingsHeader:{
     color:'white',
     fontSize:hp('2.30'),
     marginLeft:wp('8')

  },
     threeDotIcon:{
      marginLeft:wp('4')

     },
       tinyLogo:{
           height: hp('7%'),
           width: wp('12%'),
           borderRadius: wp('5%'),
           marginLeft:wp('8')
       },




})



