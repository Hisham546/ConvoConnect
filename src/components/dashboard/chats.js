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

 export default function Chats({navigation}){

  const [contacts, setContacts] = useState([]);

  const DATA = [
    {
      id: 1,
      title: 'Sundar',
      time: '1:00 pm',
      uri:'https://legacy.reactjs.org/logo-og.png'

    },
    {
      id: 2,
      title: 'Elon',
      time: '4:50 pm',
            uri:'https://legacy.reactjs.org/logo-og.png'
    },
    {
      id: 3,
      title: 'Arnold',
      time: '2:30 pm',
         uri:'https://legacy.reactjs.org/logo-og.png'

    },
      {
        id: 4,
        title: 'Ruby',
      time: '7:00 pm',
           uri:'https://legacy.reactjs.org/logo-og.png'

      },
      {
        id: 5,
        title: 'Steve Rogers',
          time: '9:00 pm',
         uri:'https://legacy.reactjs.org/logo-og.png'

      },
      {
        id: 6,
        title: 'Robert',
       time: '9:45 pm',
          uri:'https://legacy.reactjs.org/logo-og.png'

      },
 {
      id: 7,
      title: 'Sundar',
      time: '1:00 pm',
         uri:'https://legacy.reactjs.org/logo-og.png'

    },
    {
      id: 8,
      title: 'Elon',
      time: '4:50 pm',
            uri:'https://legacy.reactjs.org/logo-og.png'
    },
    {
      id: 9,
      title: 'Arnold',
      time: '2:30 pm',
         uri:'https://legacy.reactjs.org/logo-og.png'

    },
      {
        id: 10,
        title: 'Ruby',
      time: '7:00 pm',
           uri:'https://legacy.reactjs.org/logo-og.png'

      },
      {
        id: 11,
        title: 'Steve Rogers',
          time: '9:00 pm',
            uri:'https://legacy.reactjs.org/logo-og.png'

      },
      {
        id: 12,
        title: 'Robert',
       time: '9:45 pm',
         uri:'https://legacy.reactjs.org/logo-og.png'

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
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
 return(

          <View style={styles.emptyView}>
               <FlatList
                  data={DATA}
                  renderItem={({item}) =>
             <TouchableOpacity activeOpacity={0.9}  onPress={() => navigation.navigate('Interface',{data:item})}>
                <CardView
                  cardElevation={2}
                  cardMaxElevation={2} style={styles.chatCard}>
                     <View style={styles.userChatBox}>
 <Image
          key={item.id}
          resizeMode="cover"
          style={styles.tinyLogo}
          source={require('../../assets/profile.jpg')} // Replace with your local image path
        />
                    <Text style={styles.name}>{item.title}</Text>
                  {/* <Text style={styles.name}>{item.displayName}</Text>*/}

                    </View>
                      <View style={styles.userChatBox2}>
                                         <Text style={{fontSize:hp('1.50'),color:'black',marginRight:wp('3')}}>{item.time}</Text>
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
          backgroundColor:'white',
          flexDirection:'row'
  },
  tinyLogo:{
      height: 40,
      width: 40,
      borderRadius:20,
      marginLeft:wp('5')
  },
  userChatBox:{
      width:wp('50'),
      height:hp('8'),
      flexDirection:'row',
      alignItems:'center'

  },
  userChatBox2:{
    width:wp('50'),
    height:hp('8'),
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'flex-end',
  },
  name:{
      marginLeft:wp('5'),
      marginBottom:hp('3'),
      color:'black',
      fontFamily:'Manrope-Medium'

  }

})