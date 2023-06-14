import React, {useEffect, useState} from 'react';

import {
View,
Image,
Text,Button,FlatList,Alert,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import CardView from 'react-native-cardview'
import { useRecoilState } from "recoil";
import { rawID } from "../../state/atom";
 export default function Chats({navigation}){

  const [contacts, setContacts] = useState([]);
  const [uniqueKey,setUniqueKey]=useRecoilState(rawID)
  const DATA = [
    {
      id: 1,
      title: 'Alan',

    },
    {
      id: 2,
      title: 'Jagan',

    },
    {
      id: 3,
      title: 'Ancy',

    },
      {
        id: 4,
        title: 'Johann',

      },
      {
        id: 5,
        title: 'Vishnu',

      },
      {
        id: 6,
        title: 'Rakhil',

      },
  ];
     const checkPermission = async () => {
             try {
               const granted = await PermissionsAndroid.request(
                 PermissionsAndroid.PERMISSIONS.READ_CONTACTS
               );
               console.log('Permission status:', granted);
               if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                 getContacts();
               } else {
                 Alert.alert(
                   'Permission Denied!',
                   'You need to give storage permission to get the contacts'
                 );
               }
             } catch (err) {
               console.warn(err);
             }
           };
  useEffect(() => {
checkPermission()
  }, [])


 const  getContacts = () => {

  Contacts.getAll().then(contacts => {
    // contacts returned
    setContacts(contacts)

   // console.log(contacts,'.....contactz')
 for (let i = 0; i < contacts.length; i++) {
      const rawContactId = contacts[i].rawContactId;
     // console.log('Raw Contact ID:', rawContactId);
    setUniqueKey(rawContactId)
      // Do something with the rawContactId
    }
  })
  }

 return(

          <View style={styles.emptyView}>
               <FlatList
                  data={contacts}
                  renderItem={({item}) =>
             <TouchableOpacity activeOpacity={0.9}  onPress={() => navigation.navigate('Interface',{data:item})}>
                <CardView
                  cardElevation={2}
                  cardMaxElevation={2} style={styles.chatCard}>
                     <View style={styles.userChatBox}>
                   <Image resizeMode="cover"  style={styles.tinyLogo} source={require('../../assets/profile.jpg')}  />
                    <Text style={styles.name}>{item.title}</Text>
                   <Text style={styles.name}>{item.displayName}</Text>
                    </View>
                 </CardView>
                   </TouchableOpacity>}

                   keyExtractor={item => item.id}
                />






        </View>

 )








}

 const  styles =StyleSheet.create({

  emptyView:{
     flex : 1,
    width:wp('100'),
    height:hp('100'),
     backgroundColor:'white',


  },
     text:{
      color:'black'

     },
  chatCard:{
  width:wp('100'),
  height:hp('10'),
  backgroundColor:'white'

  },
  tinyLogo:{
     height: hp('5%'),
      width: wp('10%'),
      borderRadius: wp('5%'),
      marginLeft:wp('5')
  },
  userChatBox:{
  width:wp('50'),
  height:hp('8'),
  flexDirection:'row',
  alignItems:'center'

  },
  name:{
  marginLeft:wp('5'),
  marginBottom:hp('3'),
  color:'black'

  }

})