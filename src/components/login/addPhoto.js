import React, { useEffect, useRef, useState } from 'react';

import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, Keyboard,
    TextInput
}
    from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function AddPhoto({ navigation, route }) {
    return (



        <View style={StyleSheet.container}>
            <Text>Add photo</Text>

        </View>


    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})