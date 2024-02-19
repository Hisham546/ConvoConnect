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
import { Profile, UserId } from '../../models/realmModels';
import { useDispatch, useSelector } from 'react-redux';
import { useRealm } from '@realm/react';



export default function Chats({ navigation }) {

  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState('');

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
    //  checkPermission()
    fetchMessages();
    storeUserIdRealm()
  }, [])

  // const getUserNumber = () => {
  //   const people = realm.objects(Profile);
  //   const usernames = people.map(person => person.username);
  //   console.log('Usernames:', usernames);
  //   // const phoneNumbers = users.map(item => item.phoneNumber);
  //   // console.log(phoneNumbers)
  //   // //  const filteredUnits = allUnits.filter(unit => unit.ItemCode === selectedItem.itemcode);
  //   // if (usernames === phoneNumbers) {
  //   //   console.log('same')
  //   // }
  //   // else {
  //   //   console.log('not same')
  //   // }
  // };
  //storing the uid to realmdb that retrieved from redux
  const storeUserIdRealm = async () => {


    realm.write(() => {
      realm.create(UserId, {

        userid: senderId
      });
    });
  };


  const fetchMessages = async () => {

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



  const image = 'https://legacy.reactjs.org/logo-og.png';
  return (

    <View style={styles.emptyView}>
      <FlatList
        data={users}
        renderItem={({ item }) =>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Interface', { data: item })}>
            <CardView
              cardElevation={2}
              cardMaxElevation={2} style={styles.chatCard}>
              <View style={styles.userChatBox}>
                {/* //                <Image resizeMode="cover" style={styles.tinyLogo} source={{ uri: image }} /> */}
                <Image resizeMode="cover" style={styles.tinyLogo} source={{ uri: image }} />
                <Text style={styles.name}>{item.username}</Text>
                {/* <Text style={styles.name}>{item.phoneNumber}</Text> */}

              </View>
              {/* <View style={styles.userChatBox2}>
                <Text style={{ fontSize: hp('1.50'), color: 'black', marginRight: wp('3') }}>{item.time}</Text>
              </View> */}
            </CardView>
          </TouchableOpacity>}

        keyExtractor={item => item.id}
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
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  tinyLogo: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: wp('5'),

  },
  userChatBox: {
    width: wp('50'),
    height: hp('8'),
    flexDirection: 'row',
    alignItems: 'center'

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
    marginBottom: hp('3'),
    color: 'black',
    fontWeight: '500',
    fontSize: hp(1.80)

  }

})