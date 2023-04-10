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
const Tab = createMaterialTopTabNavigator();

 export default function Dashboard ({navigation}) {

 return(
 <View style ={styles.container}>
 <View style ={styles.topViewContainer}>
 <Text style={{color:'white',marginLeft:wp('4'),marginTop:hp('3')}}>WhatsApp</Text>
        <MaterialIcon name={'magnify'} size={hp('2.65%')} color={'black'}  style={styles.materialIcon} />
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
                         tabBarItemStyle: { width: 120 },
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
   backgroundColor:'#128c7e',
   },
   topViewContainer:{
   width:wp('100'),
   height:hp('10'),

   flexDirection:'row',
   justifyContent:'space-between'
   },
   materialIcon:{
   marginTop:hp('3'),
   marginRight:wp('3')

   }




  });