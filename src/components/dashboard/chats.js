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


 export default function Chats({navigation}){

  const [contacts, setContacts] = useState([]);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
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
        <Text style={styles.text}>Hi</Text>
 <FlatList
        data={DATA}
        renderItem={({item}) =>

         <Text style={styles.text}>{item.title}</Text>

        }
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
     backgroundColor:'gray',
     alignItems:'center',
     justifyContent:'center'



  },
     text:{
      color:'black'


     }

})