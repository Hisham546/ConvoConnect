import { openCamera, openPicker } from 'react-native-image-crop-picker';
import React, {useEffect, useState} from 'react';

import {
View,
Image,
Text,Button,FlatList,Keyboard,Modal,
StyleSheet,TouchableOpacity,KeyboardAvoidingView,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import { triggerCamera } from '../state/counterReducer';
import ActionSheet from "react-native-actions-sheet";

export default function Camera(){


    const dispatch= useDispatch()


    openCamera({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });


}
return(

  <ActionSheet ref={actionSheetRef}>
  <Text>Hi, I am here.</Text>
</ActionSheet>


)