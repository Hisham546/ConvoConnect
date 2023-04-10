import React, {useEffect, useState} from 'react';

import {
View,
Image,
Text,Button,FlatList,
StyleSheet,TouchableOpacity,
TextInput}
from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Contacts from 'react-native-contacts';
import CardView from 'react-native-cardview'

 export default function Chats({navigation}){

  const [contacts, setContacts] = useState([]);
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
 {/*useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
  }, []);
  const keyExtractor = (item, idx) => {
      return item?.recordID?.toString() || idx.toString();
    };
    const renderItem = ({item, index}) => {
      return <Contact contact={item} />;
    };*/}
 return(

          <View style={styles.emptyView}>
               <FlatList
                  data={DATA}
                  renderItem={({item}) =>
                <CardView
                  cardElevation={2}
                  cardMaxElevation={2}

                  style={styles.chatCard}>
                     <View style={styles.userChatBox}>
                  <Image resizeMode="cover"
                          style={styles.tinyLogo}
                          source={require('../../assets/profile.jpg')}
                        />
                    <Text style={styles.name}>{item.title}</Text>
                    </View>
                 </CardView>}
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
  marginBottom:hp('3')

  }

})