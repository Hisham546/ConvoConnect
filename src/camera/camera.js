import ImagePicker from 'react-native-image-crop-picker';
import React  from 'react';

import {
View,
Image,
Text,Button,FlatList,Keyboard,Modal,Dimensions,
StyleSheet,TouchableOpacity,KeyboardAvoidingView,Pressable,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from "react-redux";
import { triggerCamera,openModalPopup } from '../state/counterReducer';
import ActionSheet from "react-native-actions-sheet";
const { width } = Dimensions.get("window");
export default function Camera(navigation){

    const openModal = useSelector((state) => state.counter.openModal);

    const dispatch= useDispatch()



    const chooseImage = (cropping) => {
   ImagePicker.openCamera({
     width: 300,
     height: 400,
     cropping: true,
   }).then(image => {
     console.log(image);
   });
}
                   const chooseGallery = (cropping) => {
                 ImagePicker.openPicker({
                   width: 300,
                   height: 400,
                   cropping: true
                 }).then(image => {
                   console.log(image);
                 });
            }
return(



         <Modal
               animationType="slide"
               transparent={true}
               visible={openModal}>
                 <View style={styles.centeredView}>
                   <View style={styles.modalView}>
                     <View style={styles.mainView}>
                          <View style={{width:wp('100'),flexDirection:'row',justifyContent:'space-between',height:hp('5')}}>
                    <Text style={{fontFamily:'Manrope-Bold',fontSize:hp('1.90'),color:'white',marginTop:hp('.70'),marginLeft:wp('1')}}> Add Photo</Text>
                      <TouchableOpacity  style={styles.closeButton}
                        onPress={() => dispatch(openModalPopup(false))}>
                          <MaterialIcon name={'close-circle-outline'} size={hp('3%')} color={'#e1e1e1'}  style={styles.threeDotIcon} />
                      </TouchableOpacity>
                      </View>
                      <View style={{width:wp('100'),height:hp('16'),flexDirection:'row',alignItems:'center',justifyContent:'space-around' }}>
                         <View style={styles.iconView}>

                           <TouchableOpacity onPress={() => chooseImage()} style={{width:45,height:45,
                              borderRadius:22.5,borderColor:'#9DC08B',justifyContent:'center',alignItems:'center',borderWidth:wp('.3')}}>
                             <MaterialIcon name={'camera-enhance-outline'} size={hp('3%')} color={'#41644A'}   />
                          </TouchableOpacity>

                            <Text style={styles.cameraTexts}> Camera</Text>
                         </View>
                         <View style={styles.iconView}>
                              <TouchableOpacity onPress={() => chooseGallery()}  style={{width:45,height:45,
                              borderRadius:22.5,borderColor:'#9DC08B',justifyContent:'center',alignItems:'center',borderWidth:wp('.3')}}>
                             <MaterialIcon name={'image'} size={hp('3%')} color={'#41644A'}  />
                          </TouchableOpacity>
                               <Text style={styles.cameraTexts}>Gallery</Text>

                         </View>
</View>
                      </View>
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
       position: "absolute",
        top: hp('88%'),
        left: wp('40%'),
        elevation: 10,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        height: hp('24%'),
        width: width * 1,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
   },
   mainView:{
     width:wp('100'),
     height:hp('23'),
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
   closeButton:{
     width:wp('5'),
     height:hp('5'),
     marginTop:hp('.70'),
     marginRight:wp('1')

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
   cameraTexts:{
      color:'#F5F5F5',
      fontSize:hp('1.50'),
      fontFamily:'Manrope-Regular',
      marginTop:hp('1')

   },
   iconView:{
     width:wp('18'),
     height:hp('10'),
     justifyContent:'center',
     alignItems:'center'

   }
})