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


buttonContainer:{

    width :deviceWidth * 0.60,
    height:deviceHeight*0.06,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'

    // backgroundColor:'red'

}

})
export default styles