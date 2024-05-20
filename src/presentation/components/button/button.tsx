import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "./buttonTypes";
import styles from "./styles";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        buttonText,
        backgroundColor,
        textStyle,
        onPress,
        iconName,
        iconColor,
        marginBottom,
        width,
        borderRadius,
        loading
    } = props

    return (


        <TouchableOpacity activeOpacity={0.75}
            onPress={onPress}
            style={[styles.buttonContainer,
            {
                backgroundColor,
                marginBottom: marginBottom !== undefined ? marginBottom : 0,
                width: width !== undefined ? width : deviceWidth * 0.60,
                borderRadius: borderRadius !== undefined ? borderRadius : 30

            }]}>
            {iconName && <MaterialIcon name={iconName} size={20} color={iconColor} />}
            {loading === true ?
                <MaterialIndicator color='#5AB2FF' size={26} />
                :
                <Text style={textStyle}>{buttonText}</Text>
            }
        </TouchableOpacity>

    )



}