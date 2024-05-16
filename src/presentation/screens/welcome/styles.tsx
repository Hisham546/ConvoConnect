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
        flex: 1
    },
    topView: {
        width: deviceWidth,
        height: deviceHeight * 0.50,

    },
    footerView: {
        width: deviceWidth,
        height: deviceHeight * 0.50,
        backgroundColor: '#5AB2FF'
    },
    buttonParentView: {
        width: deviceWidth,
        height: deviceHeight * 0.25,
        justifyContent: 'center',
        alignItems: 'center'

    },
    descriptionView: {
        width: deviceWidth,
        height: deviceHeight * 0.25,
        justifyContent: 'center',


    },
    descriptionBox: {
        width: deviceWidth * 0.80,
        height: deviceHeight * 0.20,
        alignItems: 'flex-start',
        marginLeft: '5%'

    },
    decriptionText: {
        color: 'black',
        fontSize: fontSize.h2,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Bold'
    },
    buttonTextStyle: {
        color: 'black',
        fontSize: fontSize.p,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Medium'

    }
})
export default styles