import { openCamera, openPicker } from 'react-native-image-crop-picker';
import React  from 'react';

import {
View,
Image,
Text,Button,FlatList,Keyboard,Modal,
StyleSheet,TouchableOpacity,KeyboardAvoidingView,Pressable,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import { triggerCamera,openModalPopup } from '../state/counterReducer';
import ActionSheet from "react-native-actions-sheet";

export default function Camera(navigation){

    const openModal = useSelector((state) => state.counter.openModal);

    const dispatch= useDispatch()
console.log(openModal,'.........')

    openCamera({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });



return(



         <Modal
               animationType="slide"
               transparent={true}
               visible={openModal}
              >
               <View style={styles.centeredView}>
                 <View style={styles.modalView}>
                   <Text style={styles.modalText}>Hello World!</Text>
                   <TouchableOpacity
                     style={[styles.button, styles.buttonClose]}
                     onPress={() => dispatch(openModalPopup(false))}>
                     <Text style={styles.textStyle}>Hide Modal</Text>
                   </TouchableOpacity>
                 </View>
               </View>
             </Modal>


)
}

const styles = StyleSheet.create({


   centeredView: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 22,
   },
   modalView: {
     margin: 20,
     backgroundColor: 'white',
     borderRadius: 20,
     padding: 35,
     alignItems: 'center',
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 4,
     elevation: 5,
   },
   button: {
     borderRadius: 20,
     padding: 10,
     elevation: 2,
   },
   buttonOpen: {
     backgroundColor: '#F194FF',
   },
   buttonClose: {
     backgroundColor: '#2196F3',
   },
   textStyle: {
     color: 'white',
     fontWeight: 'bold',
     textAlign: 'center',
   },
   modalText: {
     marginBottom: 15,
     textAlign: 'center',
   },
})