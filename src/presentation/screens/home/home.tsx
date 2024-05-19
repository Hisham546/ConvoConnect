import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";
import PhoneInput from "react-native-phone-number-input";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default function Home({ navigation }: { navigation: any }) {

    const [userName, setUserName] = useState();
    const phoneInput = useRef(null);
    const [country, setCountry] = useState('91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);

    return (

        <View style={styles.mainContainer}></View>

    )
}