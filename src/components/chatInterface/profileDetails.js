import React, {useEffect,useRef,useState} from 'react';
import {
    View,
    Image,
    Text,Button,
    StyleSheet,TouchableOpacity,Keyboard,
    TextInput}
    from "react-native";
    import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
    import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
    import { useSelector, useDispatch } from "react-redux";
import {  openModalPopup } from '../../state/counterReducer';

export default function  ProfileDetails({ route, navigation: { goBack }, navigation}){
    const openModal = useSelector((state) => state.counter.openModal);
    const dispatch = useDispatch()
    const[user]=useState(route.params.user)




return(


<View style={styles.mainContainer}>
    
    <View style={styles.firstView}>
    <TouchableOpacity onPress={()=>goBack()}>
               <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
           </TouchableOpacity>
           <Image resizeMode="cover"  style={styles.profileLogo} source={require('../../assets/profile.jpg')}  />
           <MaterialIcon name={'dots-vertical'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
   
           
    </View>
    <View style={styles.titleView}><Text style={{color:'white',fontSize:hp('1.90'),letterSpacing:wp('.70'),fontFamily:'Manrope-Medium'}}>{user.title}</Text>
           </View>
           <View style={{width:wp('100'),height:hp('8'),flexDirection:'row',justifyContent:'space-evenly',backgroundColor:'#128C7E'}}>      
           <TouchableOpacity  onPress={() =>   dispatch(openModalPopup(true))}>   
           <MaterialIcon name={'video'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} /> 
           </TouchableOpacity>
           <MaterialIcon name={'phone'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />         
           </View>    
    <View style={styles.belowView}>




    </View>











</View>

)





}

const styles = StyleSheet.create ({

    mainContainer:{
   flex:1,
   backgroundColor:'white'


    },
    firstView:{
        width:wp('100'),
        height:hp('20'),
        backgroundColor:'#128C7E',
        flexDirection:'row',
        justifyContent:'space-between'

    },

    threeDotIcon:{
        marginLeft:wp('4'),
        marginTop:hp('1.50')
     },
     profileLogo:{
        height: hp('15.20%'),
        width: wp('30%'),
        borderRadius: wp('18%'),
          marginTop:hp('1.50')
     },
     belowView:{

        width:wp('100'),
        height:hp('30'),
        marginTop:hp('1'),
       // backgroundColor:'#128C7E',
        flexDirection:'row',
        justifyContent:'space-between'

     },
     titleView:{
width:wp('100'),
height:hp('15'),
backgroundColor:'#128C7E',

   alignItems:'center'


     }





})