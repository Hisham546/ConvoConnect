import React from 'react';

import {
View,
Image,
Text,FlatList,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActionButton from 'react-native-circular-action-menu';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Calls from "./calls";
import Chats from "./chats";
import Status from "./status";
import { useRecoilState } from "recoil";
import { username } from "../../state/atom";
const Tab = createMaterialTopTabNavigator();

 export default function Dashboard ({navigation}) {
 const [text, onChangeText] = useRecoilState(username);
 return(
 <View style ={styles.container}>
 <View style ={styles.topViewContainer}>
 <Text style={{color:'white',marginLeft:wp('4'),marginTop:hp('3'),fontSize:hp('2.20')}}>WhatsApp</Text>
                 <MaterialIcon name={'camera-enhance'} size={hp('2.65%')} color={'white'}  style={styles.cameraIcon} />
        <MaterialIcon name={'magnify'} size={hp('2.65%')} color={'white'}  style={styles.searchIcon} />

        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
             <MaterialIcon name={'dots-vertical'} size={hp('2.65%')} color={'white'}  style={styles.threeDotIcon} />
             </TouchableOpacity>
</View>
    <Tab.Navigator
          screenOptions={{
                         tabBarActiveTintColor:'gray',
                         tabBarInactiveTintColor:'gray',
                         tabBarPressColor:'green',
                         tabBarIndicatorStyle: {
                         backgroundColor: 'green',
                         height: 2
                         },
                         tabBarScrollEnabled: true,
                         tabBarLabelStyle: {fontSize:hp('1.40'),textTransform: 'none'},
                         tabBarItemStyle: { width:wp('33') },
                         tabBarStyle: {
                           height:hp('5'),
                           width:wp('100'),
                           backgroundColor: 'white',

                         },
                      }} >


                <Tab.Screen name="CHATS" component={Chats} />
                <Tab.Screen name="STATUS" component={Status} />
                <Tab.Screen name="CALLS" component={Calls} />
          </Tab.Navigator>

 </View>


 );
 }

  const  styles =StyleSheet.create({


  container:{
      flex:1,
        backgroundColor:'#128C7E',
   },
   topViewContainer:{
   width:wp('100'),
   height:hp('10'),

   flexDirection:'row',
   justifyContent:'space-between'
   },
   searchIcon:{
    marginTop:hp('3'),
    marginLeft:wp('4.50')

   },
   cameraIcon:{
      marginTop:hp('3'),
          marginLeft:wp('35')

   },
   threeDotIcon:{
      marginTop:hp('3'),
      marginRight:wp('4')
   }




  });