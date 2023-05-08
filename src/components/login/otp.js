import React, { Component } from "react";

import {
View,
Image,
Text,Button,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'


 export default function Otp({navigation}){
const [confirm,setConfirm] = useState(route.params.confirm);
const [code,setCode] = useState(route.params.confirm.code ? route.params.confirm.code : '');
 return(


  <View style={styles.emptyView}>
   <Text style={styles.text}>Status</Text>


        </View>

 )








}

 const  styles =StyleSheet.create({

  emptyView:{
     flex : 1,
    width:wp('100'),
    height:hp('100'),
     backgroundColor:'white',
     alignItems:'center',
     justifyContent:'center'



  },
    text:{
     color:'black'


    }

})