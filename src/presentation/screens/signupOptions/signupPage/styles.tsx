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
import fontSize from "../../../../constants/fontSize";

const styles = StyleSheet.create({



    mainContainer: {
        flex: 1,
        backgroundColor: '#5AB2FF'
    },


    buttonTextStyle: {
        color: 'black',
        fontSize: fontSize.p,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Medium'

    },
    footerView: {
        width: deviceWidth,
        height: deviceHeight * 0.60,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //  backgroundColor:'red'


    },
    topView: {
        width: deviceWidth,
        height: deviceHeight * 0.50,

    },
    phoneNumberView: {

        justifyContent: 'center',
        width: deviceWidth * 0.70,
        height: deviceHeight * 0.06,
        borderRadius: 5,

        // borderColor: '#128C7E',

    },
    codeTextStyle: {
        fontSize: fontSize.p,


    },

    textInputStyle: {
        fontSize: fontSize.p,
        fontWeight: '400'
    },
    textContainerStyle: {
        paddingVertical: 0



    }


})

export default styles;