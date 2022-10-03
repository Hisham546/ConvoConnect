import React from 'react';

import {
View,
Image,
Text,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calls from "./calls";
import Chats from "./chats";
import Status from "./status";
const Tab = createMaterialTopTabNavigator();

 export default function Dashboard ({navigation}) {

 return(
 <View style ={styles.container}>
 <Text style={styles.text}>Hi</Text>

    <Tab.Navigator screenOptions={{
                               tabBarActiveTintColor:'black',
                               tabBarInactiveTintColor:'gray',
                               tabBarPressColor:'#fdd42b',
                               tabBarIndicatorStyle: {
                               backgroundColor: 'white',
                               height: 2
                               },
                               tabBarScrollEnabled: true,
                               tabBarLabelStyle: {fontSize: 12,textTransform: 'none'},
                               tabBarItemStyle: { width: 120, },
                               tabBarStyle: {
                               marginLeft:wp('3.50'),
                               marginTop:hp('1'),
                               height:hp('5'),
                               width:wp('93'),
                               backgroundColor: 'white',
                               borderRadius:wp('2')

                               },
                             }} >


                <Tab.Screen name="Chats" component={Chats} />
                <Tab.Screen name="Status" component={Status} />
                <Tab.Screen name="Calls" component={Calls} />
          </Tab.Navigator>

 </View>


 );
 }

  const  styles =StyleSheet.create({


  container:{
      flex:1,
      backgroundColor :'white'
   },

   text:{
    color:'black'


   }
  });