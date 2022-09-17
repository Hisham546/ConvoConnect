import React from 'react';

import {
View,
Image,
Text,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";

 export default function Dashboard ({navigation}) {

 return(
 <View style ={styles.container}>
 <Text style={styles.text}>Hi</Text>

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