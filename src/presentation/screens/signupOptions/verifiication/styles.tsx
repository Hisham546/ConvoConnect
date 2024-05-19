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
        height: deviceHeight * 0.40,
    

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


    },
    textBox: {
        width: deviceWidth,
        height: deviceHeight * 0.20,
  
        justifyContent:'center',
        alignItems:'center'

    },
    firstH1Text:{

        fontSize:fontSize.h4,
        color:'black',
        fontFamily: 'Poppins-Medium'
    },
    secondH1Text:{

        fontSize:fontSize.p,
        color:'black',
        fontFamily: 'Poppins-Medium'
    },
    enterPin:{

      width:deviceWidth * 0.80,
      height:deviceHeight * 0.06,

    },
    underlineStyleBase:{
        // width: deviceWidth * 0.08,
        // height: deviceHeight * 0.45,
        // borderWidth: 0,
        // borderBottomWidth: 5,
        // borderBottomColor: "gray",
        // color: 'red'
        backgroundColor:'#4793AF',
        borderRadius:10,
        borderColor:'#4793AF'

    },
    underlineStyleHighLighted:{
         color:'red'
    }


})

export default styles;