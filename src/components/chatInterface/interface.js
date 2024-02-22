import React, { useEffect, useState } from 'react';

import {
  View,
  Image,
  Text, Button, FlatList, Keyboard,
  StyleSheet, TouchableOpacity, KeyboardAvoidingView,
  TextInput
}
  from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import firebaseConfig from '../../../setup';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import { UserId } from '../../models/realmModels';

import { useRealm } from '@realm/react';



export default function Interface({ route, navigation }) {

  const [user, setUser] = useState(route.params.data)
  //const [image] = route.params.image
  const [title, setTitle] = useState(route.params.data.title)
  const [text, onChangeText] = React.useState('');
  const [messages, setMessages] = useState([]);

  const [senderId, setSenderId] = useState('')
  const realm = useRealm();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const ref = database().ref('chats');
        ref.on('value', (snapshot) => {
         
          const messagesArray = [];
          snapshot.forEach((childSnapshot) => {

            const messageData = childSnapshot.val()
        
            messagesArray.push(messageData);
          });
          setMessages(messagesArray); // Update the state after the loop
        });
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();

    // Cleanup function to detach the listener when the component unmounts
  }, [senderId]);


  useEffect(() => {

    getUserId()
  }, [])

  const getUserId = () => {
    try {
      const userIdObject = realm.objects('UserId')[0];
      if (userIdObject) {
        const userId = userIdObject.userId; // Access the userId property of the object
        // console.log("User ID......recieved:", userId);
        setSenderId(userId); // Assuming setSenderId is a state update function
      } else {
        // console.log("No UserId object found in Realm");
      }
    } catch (error) {
      //console.error("Error fetching user number:", error);

    }
  };

  const sendMessage = () => {
    if (text != '') {
      // Create a new data object
      var messageData = {
        messageText: text,
        senderId: senderId,
        timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })

      };

      // Add the data to the database
     // var ref = database().ref("chats").child(senderId).push();
      var ref = database().ref("chats").push();
      ref.set(messageData);
      onChangeText('')
    } else {

    }
  }




  return (

    <KeyboardAvoidingView

      style={styles.container} >
      <View style={styles.headingContainer}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Dashboard')}>
          <MaterialIcon name={'arrow-left'} size={hp('3%')} color={'white'} style={styles.threeDotIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.userHeader} onPress={() => navigation.navigate('ProfileDetails', { user })}>
          <Image resizeMode="cover" style={styles.tinyLogo} source={require('../../assets/profile.jpg')} />
          <Text style={styles.settingsHeader}>{user.username}</Text>
          <View style={styles.iconsHolder}>
            <MaterialIcon name={'video'} size={hp('3%')} color={'white'} style={styles.threeDotIcon} />
            <MaterialIcon name={'phone'} size={hp('3%')} color={'white'} style={styles.threeDotIcon} />
            <MaterialIcon name={'dots-vertical'} size={hp('3%')} color={'white'} style={styles.threeDotIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.messageWrapperView}>

        <FlatList
          data={messages} 
          renderItem={({ item }) => {
            const date = new Date(item.timestamp);
            let hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours %= 12;
            hours = hours || 12; // Handle midnight (0 hours)
            const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
            return (
              <View style={styles.textMessageView}>
                <Text style={{ color: 'black' }}>{item.messageText}</Text>
                <Text style={{ color: 'black' }}>{formattedTime}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()} // Use index as the key
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
        <TouchableOpacity onPress={() => sendMessage()} style={styles.sendButton}>
          <MaterialIcon name={'send'} size={hp('2.50%')} color={'white'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headingContainer: {
    width: wp('100'),
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('7.50'),
    backgroundColor: '#128C7E',
    elevation: 3
  },
  userHeader: {
    height: hp('7.50'),
    width: wp('96'),
    backgroundColor: '#128C7E',
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsHeader: {
    color: 'white',
    fontSize: hp('2.30'),
    marginLeft: wp('3'),
    width: wp('18'),
    height: hp('3'),
  },
  threeDotIcon: {
    marginLeft: wp('4')
  },
  tinyLogo: {
    height: 35,
    width: 35,
    borderRadius: 17.5,
    marginLeft: wp('5')
  },
  input: {
    height: hp('5.50%'),
    width: wp('75%'),
    color: 'black',
    fontSize: hp('1.80%'),
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: wp('2%'),
    marginLeft: wp('3'),
    bottomOffset: 0,


  },
  textInputContainer: {
    width: wp('100'),
    height: hp('13'),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',

  },
  iconsHolder: {
    minWidth: wp('42'),
    height: hp('7.50'),
    marginLeft: wp('14'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  sendButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#128C7E',
  },
  messageWrapperView: {
    width: wp('100'),
    height: hp('80'),

  },

  messageView: {
    width: wp('100'),
    height: hp('8'),

  },
  textMessageView: {
    width: wp('24'),
    minHeight: hp('4'),
    backgroundColor: '#F0F0F0',
    marginTop: hp('.80'),
    marginLeft: wp('3'),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }



})








