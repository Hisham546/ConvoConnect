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
import fontSize from "../../../constants/fontSize";
const styles = StyleSheet.create({


    mainContainer: {
        flex: 1,
        backgroundColor: '#5AB2FF'
    },
   
})
export default styles