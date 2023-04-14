import React, {useEffect, useState} from 'react';

import {
View,
Image,
Text,Button,FlatList,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import firebaseConfig from '../../../setup';

export default function Interface({route,navigation}){

const[user,setUser]=useState(route.params.data)
 const [text, onChangeText] = React.useState('');
const [messages, setMessages] = useState([]);

  const dataBase = () =>{
    // Get the current user ID
    const userID = firebase.auth().currentUser.uid;

    // Create a new data object with the user ID and message text
    var data = {
      userID: userID,
      text: messageText
    };

    // Add the data to the database
    var ref = database().ref("chat");
    ref.push(data);
  }

  useEffect(() => {
    // Get the current user ID
    const userID = firebase.auth().currentUser.uid;

    // Set up a listener for messages that belong to the current user
    const ref = database().ref('chat');
    ref.orderByChild('userID').equalTo(userID).on('value', (snapshot) => {
      const messagesArray = [];
      snapshot.forEach((childSnapshot) => {
        const message = childSnapshot.val();
        messagesArray.push(message);
      });
      setMessages(messagesArray);
    });

    // Clean up the listener when the component unmounts
    return () => {
      ref.off();
    };
  }, []);

return(

      <View style={styles.container}>
         <View style={styles.headingContainer}>
           <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
               <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
           </TouchableOpacity>
              <Image resizeMode="cover"  style={styles.tinyLogo} source={require('../../assets/profile.jpg')}  />
                 <Text style={styles.settingsHeader}>{user.title}</Text>
                    <View style={styles.iconsHolder}>
                  <MaterialIcon name={'video'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
                  <MaterialIcon name={'phone'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
                  <MaterialIcon name={'dots-vertical'} size={hp('3%')} color={'white'}  style={styles.threeDotIcon} />
                  </View>
         </View>
          <View>
             {messages.map((message) => (
               <Text key={message.id}>{message.text}</Text>
             ))}
           </View>
           <View style={styles.textInputContainer}>
              <TextInput
                   style={styles.input}
                   onChangeText={onChangeText}
                   value={text}
                   placeholderTextColor={'black'}
                   placeholder={"Type a message"}
              />
               <TouchableOpacity onPress={()=>dataBase()} style={styles.sendButton}>
                           <MaterialIcon name={'send'} size={hp('2.70%')} color={'white'}/>
                       </TouchableOpacity>
           </View>
      </View>

)
}

const styles =StyleSheet.create({
  container:{
     flex:1,
     backgroundColor:'white'
  },
  headingContainer:{
     width:wp('100'),
     flexDirection:'row',
     alignItems:'center',
     height:hp('7.50'),
     backgroundColor:'#128c7e',
     elevation:3
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
     height: hp('5%'),
     width: wp('10%'),
     borderRadius: wp('5%'),
     marginLeft:wp('5')
  },
  input:{
    height: hp('7%'),
    width: wp('75%'),
    color: 'black',
    fontSize: hp('1.50%'),
    borderWidth: 1,
    borderRadius:5,
    paddingLeft: wp('2%'),


  },
  textInputContainer:{
    width:wp('100'),
    height:hp('20'),
    marginTop:hp('71%'),
    justifyContent:'space-around',
    alignItems:'flex-end',
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
    height: hp('7%'),
    width: wp('13%'),
    borderRadius: wp('7%'),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green'


 }
})








