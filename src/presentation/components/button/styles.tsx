import {
    View,
    Image,
    Text, Button,
    StyleSheet, TouchableOpacity, FlatList,
    TextInput
}
    from "react-native";
import { Dimensions, Platform, StatusBar } from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({


    buttonContainer: {
        height: deviceHeight * 0.06,
       // borderRadius: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'

        // backgroundColor:'red'

    }

})
export default styles