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
 
export default function  ProfileDetails({navigation,route}){
    const[user]=useState(route.params.user)
   // console.log(user,'........user')
return(


<View style={styles.mainContainer}>
    
    <View style={styles.firstView}>
    <TouchableOpacity onPress={()=>navigation.navigate('Interface',{user})}>
               <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
           </TouchableOpacity>
           <Image resizeMode="cover"  style={styles.profileLogo} source={require('../../assets/profile.jpg')}  />
           <MaterialIcon name={'dots-vertical'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
   
           
    </View>
    <View style={styles.titleView}><Text style={{color:'white',fontSize:hp('1.90'),letterSpacing:wp('.70'),fontFamily:'Manrope-Medium'}}>{user.title}</Text>
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
        backgroundColor:'#128C7E',
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