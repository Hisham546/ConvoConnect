import React, { useEffect, useState } from 'react';

import {
  View,
  Image,
  Text, Button, FlatList, Alert,
  StyleSheet, TouchableOpacity,
  TextInput
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import CardView from 'react-native-cardview'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { BSON } from 'realm';
import { UserId } from '../../models/realmModels';
import { useDispatch, useSelector } from 'react-redux';
import { useRealm } from '@realm/react';
import { firebase } from '@react-native-firebase/auth';


export default function Chats({ navigation }) {

  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState('');
  const [savedUserId, setSavedUserId] = useState('')
  const realm = useRealm();

  const senderId = useSelector((state) => state.StoreUidReducer.userId);

  // const checkPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_CONTACTS
  //     );
  //     console.log('Permission status:', granted);
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //      // getContacts();
  //     } else {
  //       Alert.alert(
  //         'Permission Denied!',
  //         'You need to give storage permission to get the contacts'
  //       );
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  useEffect(() => {
   // getUserId()
   // storeUserIdRealm()
  }, [senderId])

  useEffect(() => {
    //  checkPermission()
    fetchUsers();

  }, [])

  //storing the uid to realmdb that retrieved from redux
  const storeUserIdRealm = async () => {
    try {
      realm.write(() => {
        realm.create('UserId', { // Use the schema name 'UserId'
          userId: senderId // Use the property name 'userId'
        });
      });
      console.log("UserId stored successfully:", senderId);
    } catch (error) {
      console.error("Error storing UserId:", error);
    }
  };
  // //fetching uid
  // const getUserId = () => {
  //   try {
  //     const userIdObject = realm.objects('UserId')[0];
  //     if (userIdObject) {
  //       const userId = userIdObject.userId;

  //       setSavedUserId(userId);
  //     } else {
  //       // console.log("No UserId object found in Realm");
  //     }
  //   } catch (error) {
  //     //console.error("Error fetching user number:", error);

  //   }
  // };
  const fetchUsers = async () => {

    const ref = database().ref('userdetails');
    ref.on('value', (snapshot) => {
      const usersArray = [];
      snapshot.forEach((childSnapshot) => {
        const getUsers = childSnapshot.val();

        usersArray.push(getUsers);
      });
      setUsers(usersArray);
    });
  };

//console.log(users)
  const image = 'https://legacy.reactjs.org/logo-og.png';
  return (

    <View style={styles.emptyView}>
      <FlatList
        style={styles.flatList}
        data={users}
        renderItem={({ item }) => {

          return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Interface', { data: item })}>
              <CardView style={styles.chatCard}>
                <View style={styles.userChatBox}>
                  <Image resizeMode="cover" style={styles.tinyLogo} source={{ uri: item.image }} />
                  <Text style={styles.name}>
                    {item.username}
                    {savedUserId === item.senderId ? ' (You)' : null}
                  </Text>
                </View>
              </CardView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.senderId}
      />




    </View>

  )








}

const styles = StyleSheet.create({

  emptyView: {
    flex: 1,
    width: wp('100'),
    height: hp('100'),
    backgroundColor: 'white',
  },
  text: {
    color: 'black'

  },
  chatCard: {
    width: wp('100'),
    height: hp('10'),
    backgroundColor: 'white'


  },
  tinyLogo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: wp('5'),

  },
  userChatBox: {
    width: wp('100'),
    height: hp('7'),
    flexDirection: 'row',
    alignItems: 'center',


  },
  userChatBox2: {
    width: wp('50'),
    height: hp('8'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  name: {
    marginLeft: wp('5'),
    marginBottom: hp('2'),
    color: 'black',
    fontWeight: '500',
    fontSize: hp(1.80)

  },
  // flatList: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   // Other styles...
  // },

})