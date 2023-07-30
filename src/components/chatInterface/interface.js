import React, {useEffect, useState} from 'react';

import {
View,
Image,
Text,Button,FlatList,Keyboard,
StyleSheet,TouchableOpacity,KeyboardAvoidingView,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import firebaseConfig from '../../../setup';
import { useRecoilState } from "recoil";
import { rawID } from "../../state/atom";
import Toast from 'react-native-toast-message';
export default function Interface({route,navigation}){

const[user,setUser]=useState(route.params.data)
const[title,setTitle]=useState(route.params.data.title)
 const [text, onChangeText] = React.useState('');
const [messages, setMessages] = useState([]);
const [uniqueId,setUniqueId] = useState();

const generateRecipientId = () => {
Keyboard.dismiss();
  if (text.length > 0) {
    // Generate a random recipient ID or use a temporary identifier
    const recipientId = Math.random().toString(36).substring(7);
    dataBase(recipientId);
    // setUniqueId(recipientId);
  } else {
    Toast.show('Enter some message', Toast.SHORT);
    console.log('error');
  }
};
const test = () => {
  // var arr = ['a', 'b', 'c']
  // for (let i of arr) {
  //   console.log(i)
    
  // }
//   let arr1 = [1, 2, 3]
// let arr2 = ['a', 'b', 'c']
// let arr3 = [...arr1, ...arr2] //spread
// console.log(arr3)
const arr = ['a', 'b']
// In the same way, we can change the contents of this array
arr.push('c')
arr[1] = 'd'
console.log(arr)
 }

  const dataBase = (recipientId) =>{
     // Create a new data object
      var data = {
       text,
       title ,// a state variable that have message from text input
       recipientId
       };
    // Add the data to the database
    var ref = database().ref("chat");
   ref.push(data);

  }

  useEffect(() => {
  const fetchMessages = async() => {
    const ref = await database().ref('chat');
      ref.on('value', (snapshot) => {
       const messagesArray = [];
       snapshot.forEach((childSnapshot) => {
         const message = childSnapshot.val();
         messagesArray.push(message);
     });
     setMessages(messagesArray);
    });
  };
  fetchMessages()
  }, []);

return(

      <KeyboardAvoidingView

      style={styles.container} >
         <View style={styles.headingContainer}>
           <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Dashboard')}>
               <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
           </TouchableOpacity>
           <TouchableOpacity activeOpacity={1} style={styles.userHeader} onPress={()=> navigation.navigate('ProfileDetails',{user})}>
             <Image resizeMode="cover"  style={styles.tinyLogo} source={require('../../assets/profile.jpg')}  />
                 <Text style={styles.settingsHeader}>{user.title}</Text>
                    <View style={styles.iconsHolder}>
                  <MaterialIcon name={'video'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
                  <MaterialIcon name={'phone'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
                  <MaterialIcon name={'dots-vertical'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
</View>
                  </TouchableOpacity>     
         </View>
         <View style={styles.messageWrapperView}>


                  <FlatList
                          data={messages}
                          renderItem={({item}) =>
                          <View style={styles.textMessageView}>
                    <Text style={{color:'black'}}>{item.text}</Text>
                    </View>
                        }
                   keyExtractor={item => item.id}
                                />
           </View>
           <View style={styles.textInputContainer}>
              <TextInput
                   style={styles.input}
                   onChangeText={onChangeText}
                   value={text}
                   placeholderTextColor={'gray'}
                   placeholder={"Type a message"}
         

              />
               <TouchableOpacity onPress={()=>dataBase()} style={styles.sendButton}>
                           <MaterialIcon name={'send'} size={hp('2.50%')} color={'white'}/>
                       </TouchableOpacity>
           </View>
      </KeyboardAvoidingView>

)
}

const styles =StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'white',
  },
  headingContainer:{
     width:wp('100'),
     flexDirection:'row',
     alignItems:'center',
     height:hp('7.50'),
     backgroundColor:'#128C7E',
     elevation:3
  },
  userHeader:{
    height:hp('7.50'),
    width:wp('96'),
    backgroundColor:'#128C7E',
    flexDirection:'row',
    alignItems:'center',
  },
  settingsHeader:{
     color:'white',
     fontSize:hp('2.30'),
     marginLeft:wp('3'),
     width:wp('18'),
     height:hp('3'),
  },
  threeDotIcon:{
     marginLeft:wp('4')
  },
  tinyLogo:{
     height: 35,
     width: 35,
     borderRadius:17.5,
     marginLeft:wp('5')
  },
  input:{
    height: hp('5.50%'),
    width: wp('75%'),
    color: 'black',
    fontSize: hp('1.80%'),
    borderWidth: 1,
    borderRadius:30,
    paddingLeft: wp('2%'),
    marginLeft:wp('3'),
    bottomOffset: 0,


  },
  textInputContainer:{
    width:wp('100'),
    height:hp('13'),
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',

 },
 iconsHolder:{
    minWidth:wp('42'),
    height:hp('7.50'),
    marginLeft:wp('14'),
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
 },
 sendButton:{
    height: 50,
    width: 50,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#128C7E',
 },
 messageWrapperView:{
     width:wp('100'),
     height:hp('80'),

 },

 messageView:{
   width:wp('100'),
   height:hp('8'),

 },
 textMessageView:{
  width:wp('24'),
  minHeight:hp('4'),
  backgroundColor:'#F0F0F0',
  marginTop:hp('.80'),
  marginLeft:wp('3'),
  borderRadius:8,
  justifyContent:'center',
  alignItems:'center',
 }



})








